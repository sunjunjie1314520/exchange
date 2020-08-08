var config = {
	query:'px',
    replace:'rem',
    baseDir: "../src/static",
    min:1
}

const styles = {
    'bold'          : ['\x1B[1m%s\x1B[22m'],
    'italic'        : ['\x1B[3m%s\x1B[23m'],
    'underline'     : ['\x1B[4m%s\x1B[24m'],
    'inverse'       : ['\x1B[7m%s\x1B[27m'],
    'strikethrough' : ['\x1B[9m%s\x1B[29m'],
    'white'         : ['\x1B[37m%s\x1B[39m'],
    'grey'          : ['\x1B[90m%s\x1B[39m'],
    'black'         : ['\x1B[30m%s\x1B[39m'],
    'blue'          : ['\x1B[34m%s\x1B[39m'],
    'cyan'          : ['\x1B[36m%s\x1B[39m'],
    'green'         : ['\x1B[32m%s\x1B[39m'],
    'magenta'       : ['\x1B[35m%s\x1B[39m'],
    'red'           : ['\x1B[31m%s\x1B[39m'],
    'yellow'        : ['\x1B[33m%s\x1B[39m'],
    'whiteBG'       : ['\x1B[47m%s\x1B[49m'],
    'greyBG'        : ['\x1B[49;5;8m%s\x1B[49m'],
    'blackBG'       : ['\x1B[40m%s\x1B[49m'],
    'blueBG'        : ['\x1B[44m%s\x1B[49m'],
    'cyanBG'        : ['\x1B[46m%s\x1B[49m'],
    'greenBG'       : ['\x1B[42m%s\x1B[49m'],
    'magentaBG'     : ['\x1B[45m%s\x1B[49m'],
    'redBG'         : ['\x1B[41m%s\x1B[49m'],
    'yellowBG'      : ['\x1B[43m%s\x1B[49m']
};


const fs = require('fs')
const crypto = require('crypto');
const { watch, series, src, dest, parallel } = require('gulp');
const stylus = require('gulp-stylus');
const getPixels = require("get-pixels")
const { exec } = require('child_process');
const { encode } = require('iconv-lite');
const base64 = require('gulp-base64');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const cssmin = require('gulp-clean-css');
const minimist = require('minimist');
const connect = require('gulp-connect');

var temporary = ''

var knownOptions = {
    string: 'path',
    default: {
        path: false,
    }
};

var options = minimist(process.argv.slice(2), knownOptions);

config.output = options.path  ? SmallProgram(options.path) : options.path

function SmallProgram(name) {
    return `./pages/${name}/${name}.wxss`
}

console.log(config.output);

exports.default = gulp_watch
exports.build = gulp_build

function gulp_watch(cb){
    
    // 编译styl文件
    watch('./stylus/*.styl', gulp_stylus).on('change', setpath)
    // 图片处理
	watch(['./*.jpg','./*.png','./*.gif']).on('add', gulp_images)
    // 生成文件后替换单位
    watch('./_temp/*.css', gulp_concat).on("change", gulp_replace)
    // 刷新浏览器
    watch(['./*.html', './_dist/*.css']).on('change', reload)

    // 启动服务器
    connect.server({
        livereload: true,
        port:9596,
    })
    
	cb();
}

function reload() {
    src(['./*.html','./js/*.js'])
    .pipe(connect.reload());
}

// 合并CSS
function gulp_concat(){
    return src(['./_dist/*.css'], {
        ignore: ['style.min.css','animate.min.css']
    })
    .pipe(concat('style.css'))
    .pipe(cssmin({
        keepSpecialComments:'',
        sourceMap: true,
        compatibility: 'ie8'
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(dest(`${config.baseDir}/css/`))
}

function gulp_images(path){
	setTimeout(async ()=>{
		const hash = createFileHash256Sync(path)
		const six = hash.substring(hash.length - 6)
		const pixels  = await getImagesPixels(path)
		renameFile(path,six.concat(pixels))
	},1000)
}

function gulp_stylus() {
	return src(temporary,{
        sourcemaps:true
    })
    .pipe(stylus())
    .pipe(autoprefixer({
        cascade: false
    }))
	.on('error', swallowError)
	.pipe(base64())
    .pipe(dest('./_temp/'))
}

function gulp_replace(path){
    var handpath = pathHandle(path)
    var syncpath = handpath.replace('/_temp','/_dist')
    fs.readFile(handpath, 'utf-8', function (err, data) {
        if(err){
            throw err
        }
        const content = convertHandle(String(data))			
        try {
            fs.writeFile(syncpath, content, function (err) {
                if (err) throw err
                console.log(`${styles.grey[0]}`,`-------------------------------------`);
                console.log(`	%s ${styles.magenta[0]}`, '读取：', handpath);
                console.log(`	%s ${styles.blue[0]}`, '方式：', `${config.query} => ${config.replace}   |   min：${config.min}px`);
                console.log(`	%s ${styles.red[0]}`, '输出：', syncpath);
                console.log(`${styles.grey[0]}`,`-------------------------------------`);

                if(config.output){
                    fs.writeFile(config.output, content, function(err) {
                        if (err) throw err
                        console.log(`	%s ${styles.magenta[0]}    ${styles.green[0]}`, '输出：', config.output, 'success ~');
                    })
                }
            })

        } catch (error) {
            console.log(error);
        }
    })

}

function gulp_build(cb) {
    deleteFolder('./_temp/')
    deleteFolder('./_dist/')
    cb()
}

function deleteFolder(path) {
    let files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            let curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                deleteFolder(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}


function convertHandle(content){
	const reg = new RegExp('(\\:|: )+(.)+(px)','gi')
	const replace_str = content.replace(reg, function(_str){
        if (_str.length > 50){
            var result = _str.replace(/\/(\d)+(px)/g, charHandle)
        }else{
            var result = _str.replace(/(\d)+(px)/g, charHandle)
        }
		
		return result
	})
    return replace_str
    
    function charHandle(_num) {
        var number = _num.replace(/px/g, '')
        if (number.indexOf('/') == -1){
            // if (number == 1) {
            //     return '1px'
            // }
            return number <= config.min ? `${number}${config.query}` : unitHandle(number)
        }else{
            number = number.replace(/\//g,'')
            return '/' + unitHandle(parseInt(number))
        }
        
    }
}

// 设置临时目录
function setpath(path) {
    temporary = pathHandle(path)
}

// 单位计算
function unitHandle(num){
	const to_res = config.replace
	switch (to_res){
		case 'rem':
			return `${num/100}${to_res}`
		default:
			return `${num}${to_res}`
	}
}

function createFileHash256Sync(filePath) { 
    //读取一个Buffer
    const buffer = fs.readFileSync(filePath);
    const fsHash = crypto.createHash('sha256');
 
    fsHash.update(buffer);
    const md5 = fsHash.digest('hex');
	return md5
}

function getImagesPixels(filePath){
	return new Promise((resolve, reject) => {
		getPixels(filePath, function(err, pixels) {
			if(err) {	
				console.log("Bad image path")
				reject(err)
			}else{
				var info = "_"+pixels.shape[0]+'x'+pixels.shape[1]
				resolve(info)
			}
		})
	})
}

// 改文件名
function renameFile(filepath,newname){
	const _last = filepath.lastIndexOf('\\');
    const _path = filepath.substring(0,_last+1);
    
    const _suffix = filepath.substring(filepath.length-4)
    const _filename = newname.concat(_suffix)
    const newfilepath = pathHandle(_path.concat(config.baseDir + '/img/', _filename))
    
	fs.rename(filepath,newfilepath,function(err){
		if(err){
			throw err
		}
        console.log(`Starting '${styles.blue[0]}' 路径： ${styles.green[0]}  ${styles.underline[0]}`, 'gulp_images', '.' + newfilepath, '可按 Ctrl + V 粘贴')
        getSize(newfilepath)
        exec('clip').stdin.end(encode('.' + newfilepath, 'gbk'));
	})
}

// 获取文件大小
function getSize(filename) {
    fs.stat(filename, function (err, state) {
        if (err) {
            console.log(err.message)
            return
        }
        var size = state.size / 1024
        var suffix = 'KB'
        if(size > 1024){
            size = size / 1024
            suffix = 'MB'
        }
        console.log(`%s ${styles.green[0]} %s`, '图片文件大小 =>', size.toFixed(2), suffix)
    })
}

// 错误提示
function swallowError(error) {
    console.error(error.toString())
    this.emit('end')
}

// 路径字符串处理
function pathHandle(_str){
    return './' + _str.replace(/\\/g,'/')
}
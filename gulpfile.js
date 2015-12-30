var gulp = require('gulp');
var path = require('path');
var rename = require('gulp-rename');
var template = require('gulp-template');
var args = require('yargs').argv;

gulp.task('make', () => {
  const cap = val => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  const name = args.name;
  const componentName = name.split('/').pop();
  const destPath = path.join(`src/${args.common ? 'common' : 'components'}`, name);

  return gulp
    .src(path.join(__dirname, 'scaffold', 'component/**/*.**'))
    .pipe(template({
      upCaseName: cap(componentName),
      name: componentName,
    }))
    .pipe(rename(filePath => {
      filePath.basename = filePath.basename.replace('temp', componentName);
    }))
    .pipe(gulp.dest(destPath));
});

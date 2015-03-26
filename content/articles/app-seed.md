https://github.com/angular/angular-seed

Already have nodejs installed globally

git clone https://github.com/angular/angular-seed.git

npm install # uses package.json which has additional commands

bower install # uses bower.json, local copy, ang 1.2

npm start # http-server -a localhost -p 8000 -c-1 # /app/index.html

Note:
  Running from the project root, 
  need to specify app in the browser, 
  partials use relative links.
  Tried to run start from app directory but cannot find package.json
  No obvious option to specify location
  TODO: Test with server from app directory

npm test
  starts google window
  strange messages
  Executed 5 of 5 SUCCESS
  keeps running - watching files?

opened version test file, changed expected version, took awhile but got the failure.

karma.conf.js lists the individual js files and directories including vendor files.

jasmine describe functions are used to add tests.

npm run test-single-run
  karma start karma.conf.js  --single-run
  karma start --single-run
  Guess you have to edit karma.conf.js to restrict tests

karma is (was) installed globally?

Just for grins, update bower.json to latest versions and see what happens.

npm update kicks off a bunch of stuff
could have done bower update I suppose
angular version did not change

bower update did the trick.
karma tests passed

php -S localhost:8080 from the app directory.  Works as expected.

.jshintrc seems to deal with 'use strict' exceptions.

=========================
gulp previously installed globally with concat module
added gulpfile.js
gulp default worked fine.
Catted some angular js to vendor.js, worked as expected.

=========================
Forked the repository.
git remote -v
origin  https://github.com/angular/angular-seed.git (fetch)
origin  https://github.com/angular/angular-seed.git (push)

git remote show origin
git remote rename origin upstream
git remote add origin https://github.com/cerad/angular-seed.git


# TweetGraph
Displays a Graph of Tweets In Last 10mins

##Dependencies
* MongoDb-Server
  * To install mongodb in Ubuntu follow this [link](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/)
  * To install mongodb in Windows follow this [link](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)
  * To install mongodb in OS X follow this [link](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
* Bower
  * Bower need to be install globally to use bower command.
  * Run `npm install -g bower`. You might need administrative privilages i.e `sudo npm install -g bower`.
* Twitter Application
  * Create a new app in twitter [here](https://apps.twitter.com/).
  * Copy the `config.example.js` to `config.js` and add the keys from twitter.



#Instructions
1. Clone repo using git clone.
2. Make sure you have a mongodb server running and you can connect to it. If no please use the above links to install.
3. If you dont want to Use a local mongodb server, you can use a cloud based solution like [Mongolab](https://mongolab.com/)
  * If using cloud based service replace the Mongodb URI in `bin/www.js` to your cloud based DB.
4. Navigate to the root folder of the app.
5. Run `npm install`. You might need administrative privilages i.e `sudo npm install`.
6. Run `bower install` to install bower dependencies.
7. Start the app usine `npm start`.
8. Navigate to http://localhost:3000/



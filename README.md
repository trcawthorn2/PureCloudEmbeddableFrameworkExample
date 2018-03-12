# PureCloud Embeddable Framework #

### What is this repository for? ###

* Need a solid embedable softphone solution

### How do I get set up? ###

#### Prerequisites ####

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Purecloud OAuth Client Id](https://developer.mypurecloud.com/api/rest/authorization/use-implicit-grant.html) (Implicit Grant)

##### Development Machine Set Up #####
```
npm install
```

#### Viewing the page locally ####
```
mac: run "sudo node server.js " in a terminal window
windows: run "node server.js: in a command prompt with elevated privileges. 

open web browser to https://localhost/example.html

```
#### Query Strings ####
You can change the styling by using the color param with one of the following options (red, blue, lightblue, yellow, orange, green)
```
https://apps.mypurecloud.com/crm/index.html?color=red
https://apps.mypurecloud.com/crm/index.html?color=blue
```

You can run locally using http or https using the following paramaters.
```
https://apps.mypurecloud.com/crm/index.html?crm=framework-local-secure
https://apps.mypurecloud.com/crm/index.html?crm=framework-local
```
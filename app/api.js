var chalk       = require('chalk');
var clear       = require('clear');
var nicl         = require('nicl');
var figlet      = require('figlet');
var GitHubApi   = require('github');


clear();
nicl.printLine(
  chalk.blue(
    figlet.textSync('Git user Details', { horizontalLayout: 'medium' })
  )
);


function getUserDetails() {

    nicl.printLine("Hello there! Please enter a github username");
    var user = nicl.readLine();
    nicl.printLine("Thank you. We would be back with the details shortly");


        // Initialize the response
        response.content = '';
        response.headers['Content-Type'] = 'application/json';

        try {
            if (request.queryParams.user === undefined) {
                nicl.printLine('Please enter a username ');
            }

            // Send an HTTP GET to the URL that we construct
            var getDetails = httpClient.get('https://api.github.com/users/'+ user);

            getDetails.waitForComplete();

            if (!getDetails.isSuccess()) {
                nicl.printLine( 'Error contacting github');
            }

            // We got a response. Parse the JSON into a JavaScript object.
            userResponse = getDetails.getResponse().content.asJSON;

            if (userResponse.status != 'OK') {
                nicl.printLine('Error returned from github: ' + userResponse.status);
            }

            // Go through the response and pend the results to the dictionary

            var name = userResponse.results[0].name;
            var email = userResponse.results[0].email;
            var public_repos = userResponse.results[0].public_repos;
            var followers = userResponse.results[0].followers;
            var following = userResponse.results[0].following;
            var created_at = userResponse.results[0].created_at;
            var updated_at= userResponse.results[0].updated_at;

        }
        
        catch (err) {
            // Handle any error that may have happened previously by generating a response
            response.content.asJSON.error = err;
        }
        nicl.printLine("Requested user: " + user);
        nicl.printLine("The full names of the user is " + name+ ".");
        nicl.printLine("The user registered on " + created_at 
            +" and his last operation on Github was on " +Details.updated_at);
        nicl.printLine(user +" has created " + public_repos + "repositories, is following "
            + following + " people and has "+ userDetails.followers + " followers");
 } 

 nicl.run(getUserDetails);

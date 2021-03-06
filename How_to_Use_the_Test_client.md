## How to Use the CodeSLO Test Engine Client

#### Getting Started
1. Create a new folder in the root of test client directory. This folder *must* be named **my_solutions**.
2. Copy the folders inside the **challenges** directory and paste them into your **my_solutions** directory.
3. Create another folder in the root of the test client directory. This folder *must* be named **user_settings**.
4. In user_settings, create a file called **config.js**.
5. Find and copy the code in the **ConfigSample.js** file and paste into your user_settings/config.js file, and fill in the correct information for firstName, lastName, and password. This information *must* match the information you registered with on the test-engine web app (http://codeslo-test-engine.herokuapp.com).
**Note**: Your password is being stored in plain text in this file. Please use a simple password that you do *not* use anywhere else.
5. Solve and run your challenges from your **my_solutions** folder. Trying to run challenges inside the **challenges** folder will generate an error.

#### How to Solve the Challenges
1. Each coding challenge comes in it's own folder. *Example: Create A Function*
2. Each folder contains several files but you're only interested in two. The **.challenge.js** file and the **readme<span>.md</span>** file. **Readme<span>.md</span>** contains instructions for the test. **.challenge.js** is where you will attempt to solve the challenge.
3. When you're ready to solve the challenge, edit the **.challenge.js** file in order to return the correct values. You can run this test locally using the Code Runner extension.
4. When you feel your solution is ready, open a command prompt in the folder of your current challenge. Then, enter the command ```node test```.
5. In the VS Code Terminal, you will receive feeback that lets you know if you passed the test or not. If you do not pass, it will also give you hints as to what you need to fix. You may submit a test any number of times.
6. If you don't see pass *or* fail feedback, you are probably using the command prompt from the wrong directory or you misnamed your function. Be sure to use the function name specified in the test readme. Let an instructor know if you need assistance.

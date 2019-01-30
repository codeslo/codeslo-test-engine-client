Here is the state of this project

1. The students download a git repo into a coding test file.
2. In the spec/support folder will a bunch of week/day folders that match folders in the challenges directory.
3. I think each day is going to need it's own index.js file (we can call it test.js) so when the student runs 'node test' it fires just those particular tests / submits them to the server. An advantage of this is that it makes grabbing the student code easy to do.
4. The student solves the challenges and then runs node test from the command line in that directory. 
5. The onComplete method fires, grabbing the appropirate functions

Problems with this strategy:

1. What does git pull do? Won't students lose all the code in their day files? That's no bueno.

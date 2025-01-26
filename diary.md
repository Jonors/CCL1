13.01.2025
First day of the CCL, pretty excited to start, feeling like my Idea is good, and relatively easy to implement, probaly, or atleast intending to put a good amount of effort into the animation frames so I want to have a working prototype as fast as possible. The plan for the structuring the coding is:
-Create an self moving playerObject that can jump by pressing W, SPACE, and UP ARROW
-Create 2 types of incoming obstacleObject with 3 varying sizes, one that can be remove and one that cant
-Make the game speed up by itself
-Add 3 collectible objects, one that speeds up the game, one that slows it down, one that increases the slash range for a certain time
-Give the playerObject the ability to "slash", with ENTER, in front of him to remove obstacleObject01

    12:28
    For now ive got a object sitting at its starting position on a fixed floor, it can jump but very weirdly, working ona fix for that. And i just got an amazing idead for how I want to make the game look. So I am going to change the fruit idea to a "on paper" idea lol hehe.
Done for the day, accomplished to make the game start to move, make the playercharacter jump and have the background scroll infinitly. Good stuff.


14.01.2025
Good Morning in the morning, today is day 2, I am very happy with the results of day 1, and the plan for today is

-Make random obstacles appear and give the Player a collison reaction that leads to a game over screen. (1)
-Make the game speed increas gradually over time. (0)

    12:17
    Little update, I did not get further than when I started in ihe Morning, inbetween it suddenly worked but then suddenly again it didnt. shows again how confusing programming can be becasue the problem fixed itself when I wasnt even trying to fix it, and it broke again wheil not even working with the movement triggers. very annoying.
    16:41
    Way home, getting things done in the train, all the moving parts and Obstacle generation done thanks to Lukas Pesendorfer(maus<3), so I got one of the things I wanted to accomplish done, which is still a lot for my state of knowledge.


15.01.20024
Day 3 OMG, so excited to start, yesterday I prettymuch managed to incorparete all the movement I need, the jumpheight and feeling of it for the playercharacter still needs some adjustments but thats not a bigg issue for now, so the Plan for today is
-Make the game gradually speed up(because I didnt implement that yesterday lol) (1)
-Make the Objects appear in random Intervals(0)
-Implememnt Object collision, and with that a Start and Game over screen (1/2)

    Daily around 12 o clock ish check in,
    for now i have my objects appearing in intervals, not random ones yet, but they dissapear again when leaving the screen, additionally the game is now speeding up but i cant stop it no more, so working on that now.
Questions for the teachers before I forget: 
                                             Everything dissapearing after a certain distance but continiung to collide
                                            How to make a random time interval
                                            collision not working/ not colliding
    15:00
    Game is not sppeding up after reaching a certain xVelocity, now trying to get te collisionReactions to work as this is the last thing that the base od my game needs. If worse comes to worse Ill just have a simple autorunner game. Lets call that plan B lol.
    15:29
    Made a seperate object class for my objects to make it easier for the collision coding, but now, out of no where and no clue why one of the obstacles does not get reacted to by the moev triggre, strongly assuming it has something to do with naming , but that shouldnt be a problem as I have a fixed name for all the objects and the others are working fine. Thats another question for lucas tomorrow if i cant fix it today.
    22:03
    Trynig to fix the problem of one object not being registered by the collision reaction eventough it is the same child as all the others, I call bs, so I think i will just say that I have accomplished half the things I planned on doing. Tomorrow I will make the start and game over screen so I will hopefully be done with pototyping, after that its on to implement the slash mechanics and the collectibles.


16.01.2025
Day 4 time to hussle, yesterday I got some stuff done but got hang up on those weird issues with the obstacles and the movetriggers. Plan for today is
-Fix the collision so that all obstacles are registered(1)
-implement collision reaction so that the game ends when touching a obstacle(0)

    13:39
    daily update yeah, So Luki helped me fix the xVelocity error message, and now everything works accordingly, with a short period of fucking everything up in between its back to fixing or lets say getting the collision to work.
    13:39
    Another bug just fixed itself, another moment of classic coding I guess
    15:59
    Fixed the issues of the obsgatcles not colliding, turns out using - values is not a good idea and screws with the 
    17:30
    I am happy, all the collisions are working, and the slashing of the blocks does too. Tomorrow its on to making a start and and end screen(becasue I didnt do that today lol) so that in theory I should have a working prototype done yeah yeah. (hopefully, fingers crossed, break a leg). And then its on to drawing and being creative, FINALLY!
    
17.01.2025
IIIIITS FRIDAY, meaning half time or so, anyaway, my character is jumping and slashing, objects are colliding and printing to the console, so now the only things missing are
-The game stopping on object collision (1)
-The spawn interval of the Objects scaling with the game speed ()
-A start and gameOver screen (1)
so, lets get it sarted heyA!
     17:11 
     About to pack up my things, in theory the prototyp is working as it should, but for some reason the player character does not get spawned in everytime which is very weird. Gonna look at that bug tomorrow. Otherwise very good progress for the day an
     d the week overall, really cant complain. Next week its 2 days more of refining the game and then its only visuals from there on yeah yeah.


18.01.2025
Only the hard ones get in the garden is what the german saying says, so lets put in some work here right. Not gonna do too much today, but I want to get my intervals to stop when the game is over so is a proper game over. Not too heavy but that would then mean that my protoype is up and running. adjustments I still have to make are
-Get the game to stop properly by clearing the Intervals or finding another method for that ()
-Fix my slash so that appears for a few seconds and doesn not have to collide with my movetrigger o dissapear(it can and will be a problem for the animation lateron) ()
-Get the score to count properly(1)
-The objects spawning in in random intervals, which I still havent done lol () (Opional)


20.01.2025
Second week start lets go. I still have a fewthings to accomplish, but those should all be doable today. 
-Get the game to load in properly when started
-Get a better/consisten blade frame so i can animate on it easier
    10:18 Danke Michi du Macher, thanks to you the game is now fully working, just timed out the player with a 0.01 milisecond so it always gets loaded in last, now its on to fixing the blade frame and the time to be creative yeah yeah yeah


21.01.2025
Finished the day yesterday, but I dind´nt write it down, sorry for that. So the prototype is up and runnning, only adjustments i will make is the gravity after Ive added animations, and the slash following the player character position. But for now its on to being creative, finally.


22.01.2025
Good evening (18:12) SO totday I have benn mostly working on my animation frames and spritesheets, to the part where Lukas helped me to split my playercharacter into 2 so that my animations are easier to implement. The spritesheets are done and only need to be implemented, or lets say, my boy runs but he doesnt jump nor slash. Last thing to do is draw enemies and a start and end screen, and then its only adjusting the gravity so it fits the play style. 
-Fixing the animation getting out of synch when slashing
-impleenting jump animation
-start and end screen
-enemies and obstacles 

23.01.2025
last day of work, almost finished and just need a few little tweaks, already finished all the sprites so it only implementing from now on.
-end screen
-jump
-tutorial

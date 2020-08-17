# Badminton Tryout System

With limited time before the first tournament and very few courts at hand, my highschool badminton coach was at a loss of what to do. Faced with over 100 unfamiliar faces of boys and girls waiting to have a go at joining the team, he turned to me who was the senior badminton team captain at that time and asked if it was possible for this process to be automated.

He had a few key requests:

- During first round filtering process:
  - Players should only play around 3 matches total of 10 points
  - Players should be allowed to choose their opponents (if their opponent also agrees)
  - This means it cannot be a pure point based system as this would cause students to only choose weaker opponents. Since both players need to agree for a match, there will never be an agreement. Thus, it must be a fair evaluation no matter the opponent.
  - Even if 2 players have never played a match against each other, there should be a score prediction for if they did
- Later rounds will be group round-robin, which will be point based
- Be able to filter match history by player, as well as see their stats

### My Solution

Through using Python's library pygame and an object oriented mindset, I was able to accomplish all of the requirements above.

![Software img](./BadmintonMatchEntry.PNG "Title")

**Data Entry:** To keep efficient, each player is given a number during player selection, so when entering matches all they have to input is player number as well as the score of the loser

![Software img](./BadmintonRanks.PNG "Title")

**Generating Ranks:** The graph data structure was used for this system, where each player is a node and the matches are the edges. To compare 2 players, the system uses Breadth first search and finds the closest path between the nodes while taking in to account the scores of the matches that connect them. Ranks are stored in a binary search tree and are update upon changes to matches.

### In Summary

2019 had the highest record of students trying out for the badminton team. The Badminton Tryout Software, had over 100+ users! After calculating how long it would have taken to manually generate a tournament style, while making sure that each player at least played three matches, it was shown that the software sped up the original tryout process by 300%! Now there are less preparation needed before the tryouts, less games required, easy tracking, and automated ranking.

### Next Steps

Two things I really want to implement in the future:

- **Make a better UI :sweat_smile:** It's pretty ugly as of now, since most of my time was spent with the algorithms in the backend
- **Make it CloudBased** right now the software is purely local, so by making it cloud based it can be easily accessible. Also I want to make it so that players can submit their scores over the phone and administrators just have to approve/disapprove so there won't always be a line crowding the front-desk.

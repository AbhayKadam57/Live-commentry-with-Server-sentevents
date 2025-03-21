import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const title = "India v/s Australia Live Match";

const comments = [
  "Match starting soon! Excited for India vs Australia! 🏏",
  "Toss time! India wins the toss and elects to bat first. Smart move!",
  "Rohit Sharma and Shubman Gill walking out to open. Let's go! 🔥",
  "First boundary of the match! Gill looks in great touch.",
  "Starc bowling with pace and bounce. Tough for the batters.",
  "Rohit Sharma hits a six! What a shot! 💥",
  "Wicket! Gill edges one to the keeper. Australia strikes early.",
  "Virat Kohli comes to the crease. The crowd goes wild! 👑",
  "Kohli off the mark with a classic cover drive. Pure class!",
  "Australia's fielding has been sharp so far. No easy runs.",
  "Rohit Sharma reaches his 50! What a knock under pressure!",
  "Cummins brings himself back into the attack. Big moment.",
  "Wicket! Rohit Sharma falls for 61. India 120/2.",
  "KL Rahul joins Kohli in the middle. Need a partnership here.",
  "Kohli hits a six! He's shifting gears now. 🚀",
  "KL Rahul looking solid. India rebuilding nicely.",
  "Half-century for Kohli! The man for the big occasions!",
  "Australia taking the review... and it's OUT! Kohli gone for 56.",
  "Hardik Pandya walks in. Time for some fireworks!",
  "Rahul and Pandya steadying the ship. India 180/4.",
  "Rahul hits a six! He's playing a gem of an innings.",
  "Wicket! Pandya falls for 28. India 210/5.",
  "Jadeja in now. Can he finish the innings strongly?",
  "Rahul reaches his century! What a player! 👏",
  "Last over of the innings. India looking for a big finish.",
  "Jadeja smashes a six! India finishing strong.",
  "India finishes at 320/7. Great total!",
  "Australia needs 321 to win. This is going to be a thriller!",
  "Warner and Marsh walking out to open for Australia.",
  "Bumrah with the new ball. Let's see what he can do.",
  "First boundary for Warner. He's looking dangerous.",
  "Wicket! Marsh edges one to the keeper. Bumrah strikes!",
  "Steve Smith comes in. Big wicket for India.",
  "Warner hits a six! He's in the mood today.",
  "Smith and Warner building a partnership. Australia 80/1.",
  "Jadeja into the attack. Can he break this partnership?",
  "Wicket! Warner falls for 45. Australia 100/2.",
  "Maxwell walks in. Time for some fireworks!",
  "Smith reaches his 50. He's anchoring the innings.",
  "Maxwell hits a six! He's changing the momentum.",
  "Wicket! Maxwell falls for 30. Australia 150/3.",
  "Labuschagne joins Smith. Australia needs a big partnership.",
  "Smith and Labuschagne rotating the strike well.",
  "Wicket! Labuschagne falls for 25. Australia 180/4.",
  "Carey comes in. Australia needs 140 more runs.",
  "Smith hits a century! What a player! 👏",
  "Wicket! Smith falls for 105. Australia 220/5.",
  "Starc walks in. Australia needs 100 runs in 10 overs.",
  "Carey hits a six! He's keeping Australia in the game.",
  "Wicket! Starc falls for 10. Australia 240/6.",
  "Cummins joins Carey. Australia needs 80 runs in 8 overs.",
  "Carey reaches his 50! What a knock under pressure.",
  "Wicket! Carey falls for 55. Australia 270/7.",
  "Zampa walks in. Australia needs 50 runs in 5 overs.",
  "Cummins hits a six! He's not giving up.",
  "Wicket! Zampa falls for 5. Australia 290/8.",
  "Hazlewood joins Cummins. Last wicket standing.",
  "Cummins hits another six! What a fight from Australia.",
  "Wicket! Hazlewood falls for 2. Australia all out for 300.",
  "India wins by 20 runs! What a match! 🏆",
  "Rahul named Player of the Match for his century. Well deserved!",
  "Great fight from Australia, but India holds their nerve.",
  "Bumrah's spell was crucial. What a bowler!",
  "Kohli's 50 and Rahul's 100 were the highlights for India.",
  "Smith's century was class, but it wasn't enough for Australia.",
  "India's fielding was top-notch today. Saved at least 20 runs.",
  "Australia's bowlers did well, but the target was too big.",
  "Hardik Pandya's cameo was important for India's total.",
  "Jadeja's all-round performance was key for India.",
  "Cummins fought hard, but Australia fell short.",
  "What a match! Cricket is the real winner today. 🏏",
  "India takes the series 2-1. Well played, both teams!",
  "Already looking forward to the next India vs Australia clash!",
  "Rohit Sharma's captaincy was spot on today.",
  "Australia missed a trick by not picking a specialist spinner.",
  "The crowd was electric today! What an atmosphere!",
  "India's middle order stepped up when it mattered.",
  "Australia's top order needs to be more consistent.",
  "Shubman Gill is the future of Indian cricket. What a talent!",
  "Steve Smith is still one of the best in the world.",
  "Bumrah and Shami's partnership with the ball was lethal.",
  "Maxwell's dismissal was the turning point of the match.",
  "KL Rahul is back in form. Great news for Team India.",
  "Australia needs to work on their death bowling.",
  "India's bench strength is incredible. So many match-winners.",
  "What a day for Indian cricket fans! 🇮🇳",
  "Australia will bounce back. They always do.",
  "The rivalry between India and Australia is the best in cricket.",
  "Can't wait for the next match! When is it?",
  "India's batting depth is a huge advantage.",
  "Australia's fielding was excellent, but India was better.",
  "This match had everything: runs, wickets, and drama!",
  "Rahul's century was the difference between the two teams.",
  "Smith's century was a masterclass, but in a losing cause.",
  "India's bowlers delivered under pressure.",
  "Australia's middle order needs to step up in big games.",
  "What a performance by Team India! Proud moment for fans.",
  "Australia will come back stronger. They always do.",
  "This is why we love cricket! What a game! 🏏",
  "India vs Australia matches never disappoint. Always a thriller!",
  "Congratulations to Team India for the series win! 🏆",
  "Australia fought hard, but India was just too good today.",
  "What a day of cricket! Can't wait for the next one!",
];

app.get("/sent-comments", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-live");

  let index = 0;

  const interval = setInterval(() => {
    if (index < comments.length) {
      let time = new Date().toLocaleTimeString();

      res.write(
        `data:${JSON.stringify({
          id: index,
          title: title,
          comment: comments[index],
          time: time,
        })}\n\n`
      );
      index++;
    } else {
      clearInterval(interval);
      res.end();
    }
  }, 3000);

  req.on("close", () => {
    clearInterval(interval);
  });
});

app.listen("8080", () => {
  console.log(`Server is running at port 8080...`);
});

var cat = {
  name: "Fluffy",
  activities: ["play", "eat cat food"],
  catFriends: [
    {
      name: "bar",
      activities: ["be grumpy", "eat bread omblet"],
      weight: 8,
      furcolor: "white",
    },
    {
      name: "foo",
      activities: ["sleep", "pre-sleep naps"],
      weight: 3,
    },
  ],
};
console.log(cat);

//Add height and weight to Fluffy
cat.height = 2;
cat.weight = 4;

// Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name="Fluffy";

//List all the activities of Fluffyy’s catFriends.
for(let i in cat.catFriends){
  console.log(cat.catFriends[i].activities);
}

//Print the catFriends names.
for(let i in cat.catFriends){
  console.log(cat.catFriends[i].name);
}

//Print the total weight of catFriends
let totalWeight = 0;
for(let i in cat.catFriends){
 totalWeight += cat.catFriends[i].weight;
}
console.log(totalWeight);

//Print the total activities of all cats (op:6)
let activities = cat.activities;
for(let i in cat.catFriends){
  for(let j=0;j<cat.catFriends[i].activities.length;i++){
    activities.push(cat.catFriends[i].activities[j]);
  }
}
console.log(activities.join('\n'));

//Add 2 more activities to bar & foo cats
cat.catFriends[0].activities.push('meowing','purring');
cat.catFriends[1].activities.push('biting','scratching');

//Update the fur color of bar
cat.catFriends[0].furcolor = 'Golden';

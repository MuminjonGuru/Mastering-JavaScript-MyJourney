let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Use a Mixin to Add Common Behavior Between Unrelated Objects
let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("Gliding!");      
    }
}

glideMixin(bird);
glideMixin(boat);

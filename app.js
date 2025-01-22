// Exercise 1: Print Odds

//function printOdds(count) {
//  if (count < 0) {
//    for (let i = 1; i >= count; i--) {
//      if (i % 2 != 0) {
//        console.log(i);
//      }
//    }
//  } else {
//    for (let i = 1; i <= count; i++) {
//      if (i % 2 != 0) {
//        console.log(i);
//      }
//    }
//  }
//}

//printOdds(-10);
//printOdds(10);

// Exercise 2: Check Age

//function checkAge(name, age) {
//  let oldEnoughMsg = `Congrats ${name}! You can drive!`;
//  let tooYoungMsg = `Sorry ${name}, you need to wait ${name} year(s) until you can drive.`;
//
//  if (age < 16) {
//    console.log(tooYoungMsg);
//  } else {
//    console.log(oldEnoughMsg);
//  }
//}

//checkAge("Ben", 12);
//checkAge("Seth", 16);
//checkAge("Cameron", 21);

// Exercise 3: Quadrant

//function checkQuadrant(x, y) {
//  if (x > 0 && y > 0) {
//    return "Quadrant 1";
//  } else if (x < 0 && y > 0) {
//    return "Quadrant 2";
//  } else if (x < 0 && y < 0) {
//    return "Quadrant 3";
//  } else if (x > 0 && y < 0) {
//    return "Quadrant 4";
//  } else if (x == 0 && y != 0) {
//    return "X Axis";
//  } else if (x != 0 && y == 0) {
//    return "Y Axis";
//  } else {
//    return "Origin";
//  }
//}

//console.log(checkQuadrant(1, 1));
//console.log(checkQuadrant(-1, 1));
//console.log(checkQuadrant(-1, -1));
//console.log(checkQuadrant(1, -1));

// Exercise 4: Triangles
function isValidTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c) {
  let isValid = isValidTriangle(a, b, c);
  if (isValid) {
    // What type of triangle?
    if (a == b && b == c) {
      return `Equilateral`;
    } else if (a == b || b == c || a == c) {
      return `Isosceles`;
    } else {
      return `Scalene`;
    }
  } else {
    return `Not a valid triangle.`;
  }
}

console.log(checkTriangle(2, 3, 4)); // scalene
console.log(checkTriangle(2, 2, 2)); // eq
console.log(checkTriangle(1, 2, 2)); // isosceles
console.log(checkTriangle(1, 1, 2)); // invalid

// Exercise 5:

/*
15 days used, 15 days remaining
Average daily use: 3.333 GB/day
You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To stay below your data plan, use no more than 2.93 GB/day.
*/

function dataUsageFeedback(planLimit, day, usage) {
  let periodLength = 30;
  let currentAvg = usage / day;
  let projectedAvg = planLimit / periodLength;
  let remainingDays = periodLength - day;
  let remainingData = planLimit - usage;
  let projectedUsage = remainingDays * currentAvg;
  let statusMsg;

  console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
  console.log(`Average projected use: ${projectedAvg} GB/day`);

  if (currentAvg > projectedAvg) {
    statusMsg = "EXCEEDING";
  } else if (currentAvg < projectedAvg) {
    statusMsg = "UNDER";
  } else {
    statusMsg = "AT";
  }

  console.log(`You are ${statusMsg} your average daily use (${currentAvg} GB/day),
  continuing this usage, you'll end up using ${
    planLimit - (usage + projectedUsage)
  } 
  GB from your data limit.`);
}

dataUsageFeedback(50, 12, 25);

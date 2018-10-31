project = {
  committee: ["Stella", "Salma", "Kai"],
  title: "Very Important Project",
  dueDate: "December 14, 2019",
  id: "3284",
  steps: [
    {description: "conduct interviews",
     dueDate: "August 1, 2018"
    },
    {description: "code of conduct",
     dueDate: "January 1, 2018"
    },
    {description: "compile results",
     dueDate: "November 10, 2018"
    },
    {description: "version 1",
     dueDate: "January 15, 2019"
    },
    {description: "revisions",
     dueDate: "March 30, 2019"
    },
    {description: "version 2",
     dueDate: "July 12, 2019"
    },
    {description: "final edit",
     dueDate: "October 1, 2019"
    },
    {description: "final version",
     dueDate: "November 20, 2019"
    },
    {description: "Wrap up",
     dueDate: "December 1, 2019"
    }
  ]
}
var m = 0
var i = 0
for (var i = 0; i < 9; i++) {
  project.steps[i].member = project.committee[m]
  m++
  if (m >= project.committee.length) {
    m = 0
  }
}


console.log(project.steps);

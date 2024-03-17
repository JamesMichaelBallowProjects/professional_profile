// node radii to select from
let radii = {
  0: 26,
  1: 20,
  2: 12,
  3: 8,
  4: 8,
  5: 6,
};

// node colors to select from
let colors = {
  red: "#9A3B3B",
  orange: "#E7B10A",
  yellow: "#E5D283",
  green: "#4F6F52",
  blue: "#424769",
  purple: "#4D3C77",
  pink: "#f8c3c3",
  grey: "#9E9FA5",
};

// node colors + element ids
let nodeGraphElementIds = ["blue", "green", "red", "yellow"];

// hard-coded values for nodes
let nodes = {
  blue: [
    // root
    {
      id: "Data",
      radius: radii[0],
      color: colors.blue,
    },

    // first generation
    {
      id: "Database",
      radius: radii[1],
      color: colors.blue,
    },
    {
      id: "ETL",
      radius: radii[1],
      color: colors.blue,
    },
    {
      id: "Visualize",
      radius: radii[1],
      color: colors.blue,
    },
    {
      id: "Analytics",
      radius: radii[1],
      color: colors.blue,
    },

    // second generation
    {
      id: "Manage",
      radius: radii[2],
      color: colors.blue,
    },
    {
      id: "Query",
      radius: radii[2],
      color: colors.blue,
    },
    {
      id: "Design",
      radius: radii[2],
      color: colors.blue,
    },
    {
      id: "UI/UX",
      radius: radii[2],
      color: colors.blue,
    },
    {
      id: "Reports",
      radius: radii[2],
      color: colors.blue,
    },
    {
      id: "ML",
      radius: radii[2],
      color: colors.blue,
    },
    {
      id: "C.Vision",
      radius: radii[2],
      color: colors.blue,
    },

    // third generation
    {
      id: "RDS",
      radius: radii[3],
      color: colors.blue,
    },
    {
      id: "FS",
      radius: radii[3],
      color: colors.blue,
    },
  ],
  green: [
    // root
    {
     id: "Problem-Solving",
     radius: radii[0],
     color: colors.green
    },

    // first generation
    {
      id: "C.Thinking",
      radius: radii[1],
      color: colors.green,
    },
    {
      id: "Troubleshoot",
      radius: radii[1],
      color: colors.green,
    },
    {
      id: "Research",
      radius: radii[1],
      color: colors.green,
    },
    {
      id: "Quick Decision",
      radius: radii[1],
      color: colors.green,
    },

    // second generation
    {
      id: "Identify",
      radius: radii[2],
      color: colors.green,
    },
    {
      id: "Solve",
      radius: radii[2],
      color: colors.green,
    },
  ],
  red: [
    // root
    {
      id: "Design",
      radius: radii[0],
      color: colors.red,
    },

    // first generation
    {
      id: "Drawing",
      radius: radii[1],
      color: colors.red,
    },
    {
      id: "Security",
      radius: radii[1],
      color: colors.red,
    },
    {
      id: "Algorithms",
      radius: radii[1],
      color: colors.red,
    },
    {
      id: "Document",
      radius: radii[1],
      color: colors.red,
    },
    {
      id: "B&R",
      radius: radii[1],
      color: colors.red,
    },

    // second generation
    {
      id: "Optimize",
      radius: radii[2],
      color: colors.red,
    },
    {
      id: "Cost",
      radius: radii[2],
      color: colors.red,
    },
    {
      id: "Encrypt",
      radius: radii[2],
      color: colors.red,
    },
    {
      id: "Secrets",
      radius: radii[2],
      color: colors.red,
    },
    {
      id: "Monitor",
      radius: radii[2],
      color: colors.red,
    },
  ],
  yellow: [
    // root
    {
      id: "Development",
      radius: radii[1],
      color: colors.yellow,
    },

    // first generation
    {
      id: "Programming",
      radius: radii[1],
      color: colors.yellow,
    },
    {
      id: "Peer Review",
      radius: radii[1],
      color: colors.yellow,
    },
    {
      id: "Agile",
      radius: radii[1],
      color: colors.yellow,
    },
    {
      id: "Version Control",
      radius: radii[1],
      color: colors.yellow,
    },

    // second generation
    {
      id: "OOP",
      radius: radii[2],
      color: colors.yellow,
    },
    {
      id: "Script",
      radius: radii[2],
      color: colors.yellow,
    },
    {
      id: "Modules",
      radius: radii[2],
      color: colors.yellow,
    },
    {
      id: "APIs",
      radius: radii[2],
      color: colors.yellow,
    },
    {
      id: "Criticism",
      radius: radii[2],
      color: colors.yellow,
    },
    {
      id: "Accuracy",
      radius: radii[2],
      color: colors.yellow,
    },
    {
      id: "SDLC",
      radius: radii[2],
      color: colors.yellow,
    },
    {
      id: "Scrum",
      radius: radii[2],
      color: colors.yellow,
    },
    {
      id: "Kanban",
      radius: radii[2],
      color: colors.yellow,
    },
    {
      id: "Git",
      radius: radii[2],
      color: colors.yellow,
    },
    {
      id: "Repository",
      radius: radii[2],
      color: colors.yellow,
    },
  ],
};

// hard-coded values for node connections
let data = {
  blue: [
    ["Data", "Database"],
    ["Data", "ETL"],
    ["Data", "Visualize"],
    ["Data", "Analytics"],
    ["Database", "Manage"],
    ["Database", "Query"],
    ["Database", "Design"],
    ["Design", "RDS"],
    ["Design", "FS"],
    ["Visualize", "UI/UX"],
    ["Visualize", "Reports"],
    ["Analytics", "ML"],
    ["Analytics", "C.Vision"],
  ],
  green: [
    ["Problem-Solving", "C.Thinking"],
    ["Problem-Solving", "Troubleshoot"],
    ["Problem-Solving", "Research"],
    ["Problem-Solving", "Quick Decision"],
    ["Troubleshoot", "Identify"],
    ["Troubleshoot", "Solve"],
  ],
  red: [
    ["Design", "Drawing"],
    ["Design", "Security"],
    ["Design", "Algorithms"],
    ["Design", "B&R"],
    ["Design", "Document"],
    ["Algorithms", "Optimize"],
    ["Algorithms", "Cost"],
    ["Security", "Encrypt"],
    ["Security", "Secrets"],
    ["Security", "Monitor"],
  ],
  yellow: [
    ["Development", "Programming"],
    ["Development", "Peer Review"],
    ["Development", "Agile"],
    ["Development", "Version Control"],
    ["Programming", "OOP"],
    ["Programming", "Modules"],
    ["Programming", "Script"],
    ["Programming", "APIs"],
    ["Peer Review", "Accuracy"],
    ["Peer Review", "Criticism"],
    ["Agile", "SDLC"],
    ["Agile", "Scrum"],
    ["Agile", "Kanban"],
    ["Version Control", "Git"],
    ["Version Control", "Repository"],
  ],
};

// define node template for skills
function get_skill_node(id, radius, color) {
  return {
    id: id,
    marker: {
      radius: radius,
      fillColor: color,
    },
    dataLabels: {
      enabled: true,
      allowOverlap: false,
    },
  };
}

// define highcharts template for skills
function get_skills_network_graph(
  element_id,
  title,
  link_length,
  link_width,
  nodes_this_chart,
  data_this_chart
) {
  return Highcharts.chart(element_id, {
    chart: {
      type: "networkgraph",
      marginTop: 40,
      chartHeight: 300,
      plotHeight: 280,
      reflow: true,
      backgroundColor: "transparent",
    },
    title: {
      text: title,
    },
    plotOptions: {
      networkgraph: {
        keys: ["from", "to"],
        layoutAlgorithm: {
          linkLength: link_length,
          integration: "euler",
          enableSimulation: true,
        },
        link: {
          color: "grey",
          width: link_width,
        },
      },
    },
    series: [
      {
        dataLabels: {
          enabled: true,
          textPath: {
            enabled: true,
          },
          linkFormat: "",
          allowOverlap: false,
          shadow: true,
          backgroundColor: "black",
        },
        nodes: nodes_this_chart,
        data: data_this_chart,
      },
    ],
  });
}

// combine hard-coded and reusable code to get actual nodes
nodeGraphElementIds.forEach((modelColor) => {
  for (let i = 0; i < nodes[modelColor].length; i++) {
    nodes[modelColor][i] = get_skill_node(
      nodes[modelColor][i].id,
      nodes[modelColor][i].radius,
      nodes[modelColor][i].color
    );
  }
});

// generate network graphs using reusable code
const blue = get_skills_network_graph(
  (element_id = "blue"),
  (title = "Data"),
  (link_length = 18),
  (link_width = 2),
  (nodes_this_chart = nodes.blue),
  (data_this_chart = data.blue)
);

const green = get_skills_network_graph(
  (element_id = "green"),
  (title = "Problem-Solving"),
  (link_length = 18),
  (link_width = 2),
  (nodes_this_chart = nodes.green),
  (data_this_chart = data.green)
);

const red = get_skills_network_graph(
  (element_id = "red"),
  (title = "Design"),
  (link_length = 18),
  (link_width = 2),
  (nodes_this_chart = nodes.red),
  (data_this_chart = data.red)
);

const yellow = get_skills_network_graph(
  (element_id = "yellow"),
  (title = "Development"),
  (link_length = 18),
  (link_width = 2),
  (nodes_this_chart = nodes.yellow),
  (data_this_chart = data.yellow)
);

// hover color change
for (let i = 0; i < nodeGraphElementIds.length; i++) {
  document
    .getElementById(nodeGraphElementIds[i])
    .addEventListener("mouseenter", function () {
      this.classList.add("highlight");
    });
  document
    .getElementById(nodeGraphElementIds[i])
    .addEventListener("mouseleave", function () {
      this.classList.remove("highlight");
    });
};

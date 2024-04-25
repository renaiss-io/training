const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const glob = require("glob");
const { execSync } = require("child_process");
let ejs = require("ejs");

function errorsInTrainingInfo(training) {
  const missingFields = [
    "title",
    "description",
    "category",
    "level",
    "language",
    "href",
    "slug",
  ].filter((field) => !training || training[field] === undefined);
  return missingFields.length > 0;
}

console.log("🔨 Building slides....");
// Create slides
try {
  const out = execSync("pnpm static", { encoding: "utf8" });
  console.log(out);
} catch (error) {
  console.error("🚨 Error occurred:", error);
  console.error("🚨 Standard Error Output:", error.stderr.toString());
  exit(1);
}

// Look for markdown files:
console.log("🧐 Analyzing frontmatter from markdown files....");
const files = glob.sync("./trainings/**/*.md");
const trainings = files.map((file) => {
  const content = fs.readFileSync(file, "utf8");
  const parsed = matter(content);
  const language = RegExp(/\.([a-z]{2})\.md$/).exec(file)?.[1];
  const href = file.replace("trainings/", "").replace(".md", ".html");
  const slug = href.replace(/\/.*\.([a-z]{2})\.html$/, "");

  const trainingInfo = {
    title: parsed.data.title,
    description: parsed.data.description,
    category: parsed.data.category,
    level: parsed.data.level,
    language,
    href,
    slug,
  };

  if (errorsInTrainingInfo(trainingInfo)) {
    console.log("Error in training: ", file);
  }

  return trainingInfo;
});

console.log("🗄️ Grouping in categories");
const categories = trainings.reduce((acc, t) => {
  const { category, slug, language, level, ...training } = t;
  if (!acc[category]) {
    acc[category] = {};
  }

  if (!acc[category][slug]) {
    acc[category][slug] = {
      level,
      data: { [language]: { ...training } },
    };
  } else {
    acc[category][slug].data[language] = { ...training };
  }
  return acc;
}, {});

ejs.renderFile("build/landing.ejs", { categories }, (err, str) => {
  if (!null) {
    fs.writeFileSync("dist/index.html", str);
    // Missing files n
    fs.copyFileSync("build/landing.css", "dist/landing.css");
    fs.copyFileSync("build/favicon.ico", "dist/favicon.ico");
    fs.copyFileSync("build/favicon.ico", "dist/favicon.ico");
    fs.cpSync("theme", "dist/_assets/theme", { recursive: true });
  } else {
    console.log(err);
  }
});

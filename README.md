# Pathfinder Sample Project

Hello! Thanks for trying out this sample project. This is the file to get you set up with the project. Please follow all the instructions here so you can run the website. See [Project.md](Project.md) for info on the exercise itself.

[Email me](mailto:annis.jo@northeastern.edu) if you need help or have any questions.

## Getting Started

These setup instructions assume you have never developed a website before.

To get started with this project, you'll have to do a couple of things:

### Install Yarn

First, you'll have to install `yarn` on your computer. `yarn` is a tool called a package manager that allows you to install JavaScript modules. It's one of the most important tools in web development. Another common package manager is node package manager, or `npm`. 

[You can find instructions for installing it here](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

### Install Parcel

Next, we need a way to bundle all of our JavaScript modules and run our website. There are a couple of tools that let us do this. The common ones are [WebPack](https://webpack.js.org/), [Parcel](https://parceljs.org/getting_started.html), and [SnowPack](https://www.snowpack.dev/).

These tools also often allow us to run an HTTP server locally. This lets us see our website when we're working on it.

For this project, please go to the Parcel link and install it through the instructions on their website. 

### Install Dependencies

Great, now we can install the dependencies for the project. To do this, run the following:

```sh
yarn install
```

### Running the Project

Now we can run the project. To do so, run:

```
parcel index.html
```

Or:

```
// yarn start is set to run parcel index.html in the package.json file. 

yarn start
```





## Project Organization

This project is organized like a standard web project.

```
pathfinder-starter/
├── README.md
├── images
├── index.html
├── node_modules
├── package.json
├── scripts
├── .gitignore
└── styles
```

#### **README.md**

The `README.md` is this file! It should hold instructions on how to setup and run the project, as well as what the filestructure of the project is. You should touch on what each file means and how it relates to the developer. You should also talk about what the project is and who to contact if a developer needs help (probably you).

#### **images/**

The images folder holds all of the images for the project.

#### **index.html**

This is the entry point for the website. When we run the website through `yarn start`, this is what's first shown in the web browser. 

#### **node_modules/**

Before you run `yarn install`, this folder won't be there. Afterwards, this is where all of your JavaScript modules are installed. 


#### **package.json**

The `package.json` file is what Parcel and yarn to understand a couple of things:
- What are the dependencies in this project?
- What is the version of the project?

You can also use `package.json` to define the following information:
- What license this project is under.
- The name of the project.
- The author of the project.
- Custom scripts for the project. For instance, as shown above, we set `yarn start` to mean `parcel index.html`. These can be convenient for your development experience.

#### **styles/**

This is where all the css files for the project are kept.

#### **scripts/**

This is where all the scripts (our JavaScript files) will go in the project.


#### **.gitignore**

This tells git to ignore certain folders. The folders we don't want in our repo are these:
- `node_modules`, because it's often very large and people will run `yarn install` anyway.
- `dist`, which is the folder that will contain the built project files. This should always be newly generated to make sure people have the right version of the site.
- `yarn.lock` This is a file generated by `yarn` when it installs dependencies. It uses this to understand when you change a dependency in `package.json`. 
- Other OS generated files. Different OS's generate different files – you can see the `.gitignore` for a list.

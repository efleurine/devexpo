/**
 *  type = ["workshop","presentation","keynote", "fireside"]
 * w - p - k - f
 * A list of keyword
 */

const image = require("../../assets/myself.jpg");

export default [
  {
    time: "1:00-2:00",
    title: "Keynote",
    where: "Main Room",
    rcd: true,
    who: ["Emmanuel Fleurine", "Kenley Jean", "Marc Alain Bourcicault"],
    type: "k",
    image,
  },
  {
    time: "2:00-3:00",
    title: "React Group Meeting",
    where: "Meetup Space",
    rcd: true,
    who: ["Emmanuel Fleurine"],
    image,
    tags:["ReactJS", "Web Development", "Meetup"]
  },
  {
    time: "2:05-2:20",
    title: "Spark AR for places and Spaces",
    where: "Classroom 2",
    rcd: true,
    who: "Emmanuel Fleurine",
    type: "p",
    image,
  },
  {
    time: "2:05-2:35",
    title: "Getting Start with Infer: Find and Fix Bugs in Your Code",
    rcd: true,
    where: "Classroom 1",
    who: ["Emmanuel Fleurine"],
    type: "p",
    image,
  },
  {
    time: "2:25-2:40",
    title: "Spark AR for Shopping",
    rcd: true,
    where: "Classroom 2",
    who: ["Emmanuel Fleurine"],
    type: "p",
    image,
  },
  {
    time: "2:40-3:10",
    title: "A Sneak Peek of Udacity's New Machine Learning Course",
    where: "Classroom 1",
    rcd: true,
    who: ["Emmanuel Fleurine"],
    type: "p",
    image,
  },
];

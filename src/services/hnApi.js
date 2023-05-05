import axios from "axios";

import { toast } from "react-toastify";

import { selectFields } from "../selectors/selectFields";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json?print=pretty`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
  try {
    const result = await axios.get(`${storyUrl + storyId}.json?print=pretty`);

    return selectFields(result.data);
  } catch (error) {
    toast("Something get wrong");
  }
};

export const getStoryIds = async () => {
  try {
    const result = await axios.get(newStoriesUrl);
    return result.data;
  } catch (error) {
    toast("Something get wrong");
  }
};

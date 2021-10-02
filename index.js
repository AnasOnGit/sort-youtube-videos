const search = require("@yimura/scraper").default;
const info = require("yt-channel-info");

const yt_search = new search();

// helper function
// extract youtube channel Id
function extractId(url) {
  if (url.includes("https://www.youtube.com/channel/")) {
    return url.replace("https://www.youtube.com/channel/", "");
  }
  if (url.includes("https://www.youtube.com/user/")) {
    return url.replace("https://www.youtube.com/user/", "");
  }
  if (url.includes("https://www.youtube.com/c/")) {
    return url.replace("https://www.youtube.com/c/", "");
  }
  return url;
}

// function to search channel on youtube
const search_channel = async (searchTerm) => {
  const channelsFound = await yt_search.search(searchTerm, {
    searchType: "channel",
  });
  return channelsFound.channels;
};

// get total video count
const total_videos_count = async (channelId) => {
  let count = await yt_search.search(extractId(channelId), {
    searchType: "channel",
  });
  if (count.channels[0] === undefined) {
    console.log("invalid channel id");
    return { code: "invalid channel id", status: 404 };
  } else {
    return await {
      uploadedVideos: count.channels[0].uploadedVideos,
      status: 200,
    };
  }
};

const get_videos = async (channelId) => {
  // videos array
  let videos = [];
  // get total videos count
  let video_count = await total_videos_count(channelId);
  // total number of calls to get all youtube videos
  let continuation_count =
    video_count.uploadedVideos > 30
      ? Math.floor(video_count.uploadedVideos / 30)
      : 0;
  //  string to access more videos
  let continuation;
  // get videos
  let videos_res = await info.getChannelVideos(extractId(channelId), "oldest ");
  // update / set continuation string (to get more videos)
  continuation = videos_res.continuation;
  // insert video inside video array
  videos = videos.concat(videos_res.items);

  if (continuation_count > 0) {
    let i = 0;
    let more_vid;
    do {
      more_vid = await info.getChannelVideosMore(continuation);
      // update / set continuation string (to get more videos)
      continuation = more_vid.continuation;
      // update / set continuation string (to get more videos)
      videos = videos.concat(more_vid.items);
      i++;
    } while (i < continuation_count);
  }
  return videos;
};

const sortVideos = async (videos, sortType) => {
  // check sorting type - Note: we are only sorting videos from low to high, in...
  //  future more sorting options will be avaliable

  // lh = low to high
  if (sortType === "lh") {
    return videos.sort((a, b) => {
      return a.viewCount - b.viewCount;
    });
  }

  // sort by video duration - vdsl = video duration short to long
  if (sortType == "vdsl") {
    return videos.sort((a, b) => {
      return a.lengthSeconds - b.lengthSeconds;
    });
  }

  // sort by video duration - vdls = video duration long to short
  if (sortType == "vdls") {
    return videos.sort((a, b) => {
      return b.lengthSeconds - a.lengthSeconds;
    });
  }
};

const sortLowToHigh = async (channelId) => {
  const videos = await get_videos(channelId);
  let sortedVideos = sortVideos(videos, "lh");
  return sortedVideos;
};

const sortByDuration = async (channelId, from = "sl") => {
  if (from === "sl" || from === "ls") {
    const videos = await get_videos(channelId);
    let sortedVideos = sortVideos(videos, `vd${from}`);
    return sortedVideos;
  }
  return { message: `"${from}" is not a valid argument.Try 'sl' or 'ls'.` };
};

module.exports = { sortLowToHigh, sortByDuration, search_channel };

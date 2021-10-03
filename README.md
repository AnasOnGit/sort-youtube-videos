# Sort YouTube Videos

Additional sorting options for YouTube channel videos.

# Demo

`Demo coming soon!!!`

## Support

[**`Support development of this project.`**](https://paypal.me/anasikhlas)

# Why?

YouTube only offers few **sorting** options, But, I want to use some other sorting options like Sort videos by least viewed video to most viewed video, sort by video duration, etc...

**_No API key is required_**

## Installation

```
npm i sort-youtube-videos
```

with yarn:

```
yarn add sort-youtube-videos
```

## **sortLowToHigh(url);** - Sort videos by views.

| Parameter | Description                           | required |
| --------- | ------------------------------------- | -------- |
| URL       | YouTube channel `url` or `channel Id` | `true`   |

## Example

```javascript
const { sortLowToHigh } = require("sort-youtube-videos");
// import { sortLowToHigh } from "sort-youtube-videos"

const url = "https://www.youtube.com/channel/UC5RRWuMJu7yP1DQwnW_nAvA"; //url or channel id
//Sort by views low to high
sortLowToHigh(url).then((res) => console.log(res));

// response type
[
  {
    type: "video",
    title: "#shorts",
    videoId: "DOrVURA_O90",
    author: "Anas and Ammar",
    authorId: "UC5RRWuMJu7yP1DQwnW_nAvA",
    videoThumbnails: [[Object], [Object], [Object], [Object]],
    viewCountText: "10 views",
    viewCount: 17,
    publishedText: "4 months ago",
    durationText: "0:57",
    lengthSeconds: 57,
    liveNow: false,
    premiere: false,
    premium: false,
  },
  {
    type: "video",
    title: "Ramzan Ki Shan Episode 04",
    videoId: "7VO4ZLBVQiY",
    author: "Anas and Ammar",
    authorId: "UC5RRWuMJu7yP1DQwnW_nAvA",
    videoThumbnails: [[Object], [Object], [Object], [Object]],
    viewCountText: "17 views",
    viewCount: 17,
    publishedText: "5 months ago",
    durationText: "8:08",
    lengthSeconds: 488,
    liveNow: false,
    premiere: false,
    premium: false,
  },
  //   ... 109 more items
];
```

## **sortByDuration(url);** - Sort videos by **duration**

| Parameter | Description                                                                              | required |
| --------- | ---------------------------------------------------------------------------------------- | -------- |
| URL       | YouTube channel `url` or `channel Id`                                                    | `true`   |
| sortBy    | Two sorting options are available: Default `sl` (short -> long) and `ls` (long -> short) | `false`  |

## Example

```javascript
const { sortByDuration } = require("sort-youtube-videos");
// import { sortByDuration } "sort-youtube-videos";

const url = "https://www.youtube.com/channel/UC5RRWuMJu7yP1DQwnW_nAvA"; //url or channel id
const sortBy = "sl"; // options: sl - ls

sortByDuration(url, sortBy).then((res) => console.log(res));

// response type
[
  {
    type: "video",
    title: "Ramadan Ki Shan Episode 11 Digitally Presented by Spiced Foods",
    videoId: "dgoBBYbSKUQ",
    author: "Anas and Ammar",
    authorId: "UC5RRWuMJu7yP1DQwnW_nAvA",
    videoThumbnails: [[Object], [Object], [Object], [Object]],
    viewCountText: "15 views",
    viewCount: 15,
    publishedText: "5 months ago",
    durationText: "4:09",
    lengthSeconds: 249,
    liveNow: false,
    premiere: false,
    premium: false,
  },
  {
    type: "video",
    title:
      "Watch latest movies, web series and TV channels for free without any subscription ||Android",
    videoId: "ummVLFK17GI",
    author: "Anas and Ammar",
    authorId: "UC5RRWuMJu7yP1DQwnW_nAvA",
    videoThumbnails: [[Object], [Object], [Object], [Object]],
    viewCountText: "16 views",
    viewCount: 16,
    publishedText: "1 year ago",
    durationText: "4:11",
    lengthSeconds: 251,
    liveNow: false,
    premiere: false,
    premium: false,
  },
  //   ... 109 more items
];
```

## **search_channel(name);** - Get YouTube channel **URL**

| Parameter    | Description                   | required |
| ------------ | ----------------------------- | -------- |
| Channel Name | To get YouTube channel `name` | `true`   |

## Example

```javascript
const { search_channel } = require("sort-youtube-videos");
// import { search_channel } from "sort-youtube-videos";

const channelName = "Codestick"; // YouTube  channel name
search_channel(channelName).then((res) => console.log(res));

// response type
// return all channel with this name
[
  {
    channelId: "UCYGZ4todIWGIUS1B8ZjML1w",
    description: "Learn Coding... Happy Coding.....",
    link: "https://www.youtube.com/channel/UCYGZ4todIWGIUS1B8ZjML1w",
    thumbnails: [[Object], [Object]],
    subscribed: false,
    uploadedVideos: 57,
    verified: false,
  },
  {
    channelId: "UCae4VwFs7LtQimLOhk6Gdow",
    description: "",
    link: "https://www.youtube.com/channel/UCae4VwFs7LtQimLOhk6Gdow",
    thumbnails: [[Object], [Object]],
    subscribed: false,
    uploadedVideos: 2,
    verified: false,
  },
  // all channels with this name
];
```

# Sorting options:

- Sort videos by views **_(least viewed video to most viewed video `1 view - 1M views`)_** `sortLowToHigh(url);`
- Sort by video `duration` (shortest duration to longest duration and longest duration to shortest duration ) `sortByDuration(channelName);`
- More sorting options coming soon

## Contributing

Pull requests are welcome.

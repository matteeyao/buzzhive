```js
{
  entities: {
    users: {
        1: {
            id: 1
            username: "Anonymous Fox",
            fname: "Guest",
            lname: "User",
            email: "demo@buzzhive.io"
        },
        2: {
            id: 2
            username: "Anonymous Bison",
            fname: "Guest",
            lname: "User",
            email: "demo@buzzhive.io"
        },
        3: {
            id: 3
            username: "Anonymous Hedgehog",
            fname: "Guest",
            lname: "User",
            email: "demo@buzzhive.io"
        },
        4: {
            id: 4
            username: "Anonymous Orangutan",
            fname: "Guest",
            lname: "User",
            email: "demo@buzzhive.io"
        },
        5: {
            id: 5
            username: "Anonymous Lynx",
            fname: "Guest",
            lname: "User",
            email: "demo@buzzhive.io"
        },
        6: {
            id: 6
            username: "Anonymous Hare",
            fname: "Guest",
            lname: "User",
            email: "demo@buzzhive.io"
        },
        7: {
            id: 7
            username: "Anonymous Turtle",
            fname: "Guest",
            lname: "User",
            email: "demo@buzzhive.io"
        },
        8: {
            id: 8
            username: "Anonymous Parrot",
            fname: "Guest",
            lname: "User",
            email: "demo@buzzhive.io"
        },
        9: {
            id: 9
            username: "Anonymous Dingo",
            fname: "Guest",
            lname: "User",
            email: "demo@buzzhive.io"
        },
        10: {
            id: 10
            username: "Anonymous Moose",
            fname: "Guest",
            lname: "User",
            email: "demo@buzzhive.io"
        },
        11: {
            id: 11
            username: "Anonymous Pony",
            fname: "Guest",
            lname: "User",
            email: "demo@buzzhive.io"
        },
        12: {
            id: 12,
            username: "MishMosh",
            fname: "Michelle",
            lname: "Kim",
            email: "mishmosh@aa.io"
        },
        13: {
            id: 13,
            username: "WakaFlaka",
            fname: "Sam",
            lname: "Walker",
            email: "wakaflaka@aa.io"
        },
        14: {
            id: 14,
            username: "Matty",
            fname: "Matt",
            lname: "Yao"
            email: "matty@buzzhive.com"
        },
    },
    channels: {
        1: {
            id: 1,
            title: "general",
            description: "Got something on your mind that you'd like to share with the world or simply want to chat with others from around the world?Post here in the general channel where others can like and reply to your messages.",
            private: false,
            ref_link: "https://slack.com/",
            authorId: 14,
        },
        1: {
            id: 1,
            title: "main announcements",
            description: "This channel is for team-wide communication and announcements. All team members are in this channel.",
            private: false,
            ref_link: "https://twitter.com/home",
            authorId: 14,
        },
        3: {
            id: 3,
            title: "rubber-ducky chat",
            dedsciption: "Allocated for technical discussions, topics, or questions for everything related to picking up the skill of programming.",
            private: true,
            ref_link: "https://www.reddit.com/r/learnprogramming/",
            authorId: 14,
        },
        4: {
            id: 4,
            title: "help-requests",
            dedsciption: "For technical issues! Ask for help or aid in answering a question!",
            private: false,
            ref_link: "https://www.google.com/",
            authorId: 14,
        },
        5: {
            id: 5,
            title: "dunder-mifflin",
            dedsciption: "\"Everybody likes the guy who offers them a stuck of gum.\"-Michael Scott (April 21, 2011)",
            private: false,
            ref_link: "https://www.reddit.com/r/DunderMifflin/",
            authorId: 14,
        }
        6: {
            id: 6,
            title: "focus-music-reccomendations",
            dedsciption: "A place to discuss song and music reccomendations for that midnight study/word grind.",
            private: true,
            ref_link: "https://www.spotify.com/us/",
            authorId: 14,
        }
        7: {
            id: 7,
            title: "buzzhive-feedback",
            dedsciption: "Please leave any thoughts, concerns, or feedback for improving the buzzhive platform and experience.",
            private: true,
            authorId: 14,
        }
    },
    channelMembers: {
        1: {
            id: 1,
            channel_id: 1,
            user_id: 1
        },
        ...
        98: {
            id: 98,
            channel_id: 7,
            user_id: 14
        }
    },
    directMessageChannels: {
        1: {
            id: 1,
            authorId: 14
        },
        2: {
            id: 2,
            authorId: 13
        },
        3: {
            id: 3,
            authorId: 12,
        }
    },
    directMessageChannelMembers: {
        1: {
            id: 1,
            authorId: 14
        },
        2: {
            id: 2,
            authorId: 13
        },
        3: {
            id: 3,
            authorId: 12,
        }
    },
    messages: {
        1: {
            id: 1,
            body: "Hello there",
            parent_messae_id: null,
            messageable_id: 1,
            messageable_type: directMessageChannels;
        },
        ...
        3: {
            id: 3,
            body: "How do we normalize state?",
            author_id: 14,
            messageable_id: 3,
            direct_message: "channel";
        }
    },
    reactions: {
        1: {
            id: 1,
            reaction_type: "like",
            user_id: 7,
            message_id: 1
        },
        2: {
            id: 2,
            body: "fire",
            user_id: 8,
            message_id: 1
        } 
    }
  },
  ui: {
    loading: true/false,
    modal: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    messageForm: ["Message body cannot be blank"],
  },
  session: { currentUserId: 25 }
}
```

<!-- Change mesages to polymorphic-->
<!-- joinsTable channelMemeberships
ref id to channel
and array of users -->
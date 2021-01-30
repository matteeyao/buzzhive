```js
{
    entities: {
        users: {
            1: {
                id: 1
                fname: "Guest",
                lname: "User",
                email: "demo@buzzhive.io"
                username: "Anonymous Fox",
            },
            2: {
                id: 2
                fname: "Guest",
                lname: "User",
                email: "demo@buzzhive.io"
                username: "Anonymous Bison",
            },
            3: {
                id: 3
                fname: "Guest",
                lname: "User",
                email: "demo@buzzhive.io"
                username: "Anonymous Hedgehog",
            },
            4: {
                id: 4
                fname: "Guest",
                lname: "User",
                email: "demo@buzzhive.io"
                username: "Anonymous Orangutan",
            },
            5: {
                id: 5
                fname: "Guest",
                lname: "User",
                email: "demo@buzzhive.io"
                username: "Anonymous Lynx",
            },
            6: {
                id: 6
                fname: "Guest",
                lname: "User",
                email: "demo@buzzhive.io"
                username: "Anonymous Hare",
            },
            7: {
                id: 7
                fname: "Guest",
                lname: "User",
                email: "demo@buzzhive.io"
                username: "Anonymous Turtle",
            },
            8: {
                id: 8
                fname: "Guest",
                lname: "User",
                email: "demo@buzzhive.io"
                username: "Anonymous Parrot",
            },
            9: {
                id: 9
                fname: "Guest",
                lname: "User",
                email: "demo@buzzhive.io"
                username: "Anonymous Dingo",
            },
            10: {
                id: 10
                fname: "Guest",
                lname: "User",
                email: "demo@buzzhive.io"
                username: "Anonymous Moose",
            },
            11: {
                id: 11
                fname: "Guest",
                lname: "User",
                email: "demo@buzzhive.io"
                username: "Anonymous Pony",
            },
            12: {
                id: 12,
                fname: "Michelle",
                lname: "Kim",
                email: "mishmosh@aa.io"
                username: "MishMosh",
            },
            13: {
                id: 13,
                fname: "Sam",
                lname: "Walker",
                email: "wakaflaka@aa.io"
                username: "WakaFlaka",
            },
            14: {
                id: 14,
                fname: "Matt",
                lname: "Yao"
                email: "matty@buzzhive.com"
                username: "Matty",
            },
        },
        hives: {
            1: {
                id: 1,
                name: "general",
                description: "Got something on your mind that you'd like to share with the world or simply want to chat with others from around the world?Post here in the general channel where others can like and reply to your messages.",
                is_private: false,
                ref_link: "https://slack.com/",
                authorId: 14,
            },
            1: {
                id: 1,
                name: "main announcements",
                description: "This channel is for team-wide communication and announcements. All team members are in this channel.",
                is_private: false,
                ref_link: "https://twitter.com/home",
                authorId: 14,
            },
            3: {
                id: 3,
                name: "rubber-ducky chat",
                dedsciption: "Allocated for technical discussions, topics, or questions for everything related to picking up the skill of programming.",
                is_private: true,
                ref_link: "https://www.reddit.com/r/learnprogramming/",
                authorId: 14,
            },
            4: {
                id: 4,
                name: "help-requests",
                dedsciption: "For technical issues! Ask for help or aid in answering a question!",
                is_private: false,
                ref_link: "https://www.google.com/",
                authorId: 14,
            },
            5: {
                id: 5,
                name: "dunder-mifflin",
                dedsciption: "\"Everybody likes the guy who offers them a stuck of gum.\"-Michael Scott (April 21, 2011)",
                is_private: false,
                ref_link: "https://www.reddit.com/r/DunderMifflin/",
                authorId: 14,
            },
            6: {
                id: 6,
                name: "focus-music-reccomendations",
                dedsciption: "A place to discuss song and music reccomendations for that midnight study/word grind.",
                is_private: true,
                ref_link: "https://www.spotify.com/us/",
                authorId: 14,
            },
            7: {
                id: 7,
                name: "buzzhive-feedback",
                dedsciption: "Please leave any thoughts, concerns, or feedback for improving the buzzhive platform and experience.",
                is_private: true,
                authorId: 14,
            }   
        },
        hiveMembers: {
            1: {
                id: 1,
                hive_id: 1,
                user_id: 1
            },
            ...
            98: {
                id: 98,
                hive_id: 7,
                user_id: 14
            }
        },
        directMessagehives: {
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
        directMessagehiveMembers: {
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
                parent_message_id: null,
                messageable_id: 1,
                messageable_type: directMessageHives;
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
        session: ["Incorrect username/password combination"],
        messageForm: ["Message body cannot be blank"]
    },
    session: { 
        currentUser: {
                id: 10
                fname: "Guest",
                lname: "User",
                email: "demo@buzzhive.io"
                username: "Anonymous Moose",
                hives: [{
                    author_id: 28,
                    created_at: "2021-01-29T18:44:42.057Z",
                    description: "Welcome to buzzhive. Join hundreds of channels and communicate freely with other users.",
                    id: 3,
                    is_private: false,
                    name: "welcome",
                    ref_link: null,
                    dated_at: "2021-01-29T18:44:42.057Z"
                }, {
                    author_id: 28
                    created_at: "2021-01-29T18:44:42.064Z"
                    description: "Got something on your mind? Post it here where others can like and respond to your messages."
                    id: 4
                    is_private: false
                    name: "general"
                    ref_link: "https://slack.com/"
                    updated_at: "2021-01-29T18:44:42.064Z"
                }]
        },
    }
}
```

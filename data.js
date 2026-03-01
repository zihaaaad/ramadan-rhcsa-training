// =============================================
// Ramadan RHCSA Training — Class Data
// =============================================
// HOW TO ADD A NEW CLASS:
// 1. Add a new key with the date (YYYY-MM-DD format)
// 2. Fill in title, classNumber, description
// 3. Add sections[] array with content blocks
// 4. Add questions[] array for the quiz
// See README.md for full block-type reference.
// =============================================

const classData = {

    // ========================================
    // CLASS 01 — 24 February 2026
    // ========================================
    '2026-02-24': {
        title: "Introduction & Kernel vs OS",
        classNumber: 1,
        description: "Linux কী, Kernel এবং OS এর পার্থক্য, Linux এর ইতিহাস এবং ডিস্ট্রিবিউশন নিয়ে বিস্তারিত আলোচনা।",
        sections: [
            // --- Intro ---
            {
                type: 'section',
                title: 'Introduction',
                blocks: [
                    {
                        type: 'quote',
                        text: [
                            "\"আজ আমরা যে জিনিসটা শুরু করতে যাচ্ছি, সেটার নাম Linux। অনেকে নাম শুনে ভয় পায়। ভাবে এটা খুব কঠিন। কিন্তু আমি শুরুতেই একটা কথা পরিষ্কার বলি <strong>Linux কঠিন না। Linux শুধু নতুন।</strong>\"",
                            "\"আপনি যদি Windows ব্যবহার করতে পারেন, আপনি যদি একটি মোবাইল ব্যবহার করতে পারেন, তাহলে আপনি Linux শিখতে পারবেন – ১০০% নিশ্চিত।\""
                        ]
                    },
                    { type: 'paragraph', text: "<strong>Linux মানে শুধু কালো স্ক্রিন না। Linux মানে শুধু হ্যাকিংও না। Linux মানে হলো – নিজের সিস্টেমের উপর পূর্ণ Control।</strong>" },
                    { type: 'paragraph', text: "Linux আসলে একটি Kernel – অর্থাৎ Operating System-এর core অংশ, যা সরাসরি hardware নিয়ন্ত্রণ করে। এই Linux Kernel-কে ভিত্তি করে তৈরি হওয়া Operating System দিয়েই Google, Facebook, Amazon-এর মতো বিশ্বের বড় বড় কোম্পানির server চলে। আজ আমরা সেই Linux Kernel-ভিত্তিক Operating System শেখা শুরু করছি।" },
                    { type: 'terminal', commands: ['uname -r', '6.8.0-31-generic'] },
                    {
                        type: 'highlight',
                        title: 'Linux = ২০% Concept, ৮০% Practice',
                        text: [
                            "\"Linux হলো হাতে-কলমে শেখার জিনিস। এখানে theory আছে – কিন্তু theory যথেষ্ট না।\" আপনি যত বেশি command টাইপ করবেন, যত বেশি system explore করবেন, তত দ্রুত Linux আপনার কাছে পরিষ্কার হবে। ভুল করবেন – এটা স্বাভাবিক। Error দেখবেন – এটাও স্বাভাবিক। <strong>Linux-এ ভুল করা মানে ব্যর্থ হওয়া না। Linux-এ ভুল করা মানে system-কে আরও গভীরভাবে বোঝা।</strong>",
                            "\"Linux শেখা মানে শুধু Operating System শেখা না – Problem solve করার mindset শেখা। আজ থেকে আমরা শুধু user না – আমরা system বুঝতে শিখবো।\""
                        ]
                    }
                ]
            },

            // --- Kernel vs OS ---
            {
                type: 'section',
                title: 'Definitions: Kernel vs OS',
                blocks: [
                    {
                        type: 'cards',
                        items: [
                            {
                                icon: '⚙️',
                                title: 'Kernel (কার্নেল) কী?',
                                text: 'Kernel হলো OS-এর core অংশ, যেটা সরাসরি hardware-এর সাথে কথা বলে।',
                                list: [
                                    '<strong>CPU কে বলে:</strong> কোন কাজ কখন করবে',
                                    '<strong>RAM কে বলে:</strong> কে কত মেমরি পাবে',
                                    '<strong>Disk কে বলে:</strong> কোথায় পড়বে/লিখবে',
                                    'Keyboard, Mouse, Network card চালায়'
                                ],
                                alert: 'তুমি দেখতে পাও আসতে পাও না, সরাসরি ব্যবহার করো না, কিন্তু সব কাজ Kernel ছাড়া অসম্ভব। Kernel ছাড়া কম্পিউটার = মৃত লোহা।'
                            },
                            {
                                icon: '💻',
                                title: 'Operating System (OS) কী?',
                                text: 'Operating System হলো পুরো সিস্টেম, যেটা তুমি ব্যবহার করো।',
                                list: [
                                    '<strong>Kernel</strong>',
                                    '<strong>Desktop / GUI</strong>',
                                    '<strong>Terminal / Shell</strong>',
                                    '<strong>File Manager & System Tools</strong>'
                                ],
                                alert: 'OS তোমার সাথে কথা বলে, তোমার কমান্ড বোঝে এবং Kernel-কে দিয়ে কাজ করায়।'
                            }
                        ]
                    }
                ]
            },

            // --- Process Flow ---
            {
                type: 'section',
                title: 'Process Flow: How it Works',
                subtitle: 'সম্পর্কটা কেমন? সবচেয়ে গুরুত্বপূর্ণ: নিচের ফ্লোটা মাথায় রাখুন। ঘটনা: তুমি "My Computer / This PC"- এ Double-Click করলে।',
                blocks: [
                    {
                        type: 'timeline',
                        steps: [
                            { title: 'User Input → OS', text: '<strong>Step 1: তুমি (User):</strong> তুমি Mouse দিয়ে double-click করলে। এখানে তুমি শুধু OS-এর সাথে কাজ করছো। তুমি CPU, RAM কিছুই জানো না। Mouse / Keyboard event OS ধরে।' },
                            { title: 'OS Processing', text: '<strong>Step 2:</strong> OS বলে: "ওহ, User \'This PC\' খুলতে চায়"। OS Mouse event ধরেছে, বুঝেছে কোন icon-এ click হয়েছে এবং File Explorer চালু করার সিদ্ধান্ত নিয়েছে। এখনো Kernel কিছু করেনি।' },
                            { title: 'OS → Kernel', text: '<strong>Step 3:</strong> OS এখন Kernel-কে বলে: "এই process (File Explorer) চালু করো", "Disk থেকে Drive information এনে দাও"।' },
                            { title: 'Kernel → Hardware (আসল কাজ)', text: '<strong>Step 4:</strong> Kernel এখন CPU-কে বলে process চালাতে, RAM-এ জায়গা দেয় এবং Disk driver ব্যবহার করে C:, D: drive-এর তথ্য আনে। <em>Kernel এখানে সরাসরি Hardware চালাচ্ছে।</em>', highlight: true },
                            { title: 'Kernel → OS', text: '<strong>Step 5:</strong> Kernel বলে: "এই নাও data (Drive list, space, status)", OS তখন সুন্দর করে GUI বানায়, Icon দেখায় এবং Window ওপেন করে।' },
                            { title: 'OS → Screen Output', text: '<strong>Step 6:</strong> তুমি ফলাফল দেখো (Local Disk C:, D: ইত্যাদি)। কাজ শেষ।' }
                        ]
                    }
                ]
            },

            // --- Common Questions ---
            {
                type: 'section',
                title: 'Common Questions & ISO Files',
                blocks: [
                    {
                        type: 'qa',
                        items: [
                            { question: 'Linux কি OS নাকি Kernel?', answer: 'Linux নিজে হলো Kernel, অর্থাৎ OS-এর core যা সরাসরি hardware-কে নিয়ন্ত্রণ করে। Kernel ছাড়া কোন program/hardware ঠিকভাবে কাজ করতে পারে না।' },
                            { question: 'তাহলে OS কোনগুলো?', answer: 'OS হলো Kernel + User Space। User Space বলতে বোঝায়: Desktop / GUI, Terminal, File Manager ইত্যাদি। অর্থাৎ, User-কে যা ব্যবহার করার সুবিধা দেয়, সেটা মিলে OS হয়।' },
                            { question: 'ডিস্ট্রিবিউশনগুলোকে কি OS বলতে পারি?', answer: 'হ্যাঁ, ১০০% পারি। উদাহরণ: Ubuntu, CentOS। কারণ এগুলো Linux Kernel + User Space একত্রিত করে।' },
                            { question: 'ISO file আসলে কী? এটা কি OS?', answer: 'ISO ফাইলটা নিজে OS না, এটা হলো OS install করার প্যাকেট (Install image)। এর ভিতরে Kernel, System files, Installer, Driver থাকে। ISO দিয়ে Bootable USB বানিয়ে OS install করা হয়। (<strong>ISO ≠ OS</strong>, ISO → OS বানায়)।' }
                        ]
                    }
                ]
            },

            // --- Linux History ---
            {
                type: 'section',
                title: 'Linux History (ইতিহাস)',
                blocks: [
                    {
                        type: 'history',
                        items: [
                            { year: '1980s', title: 'UNIX-এর যুগ', text: 'UNIX তখনকার সবচেয়ে শক্তিশালী OS ছিল কিন্তু দামি এবং closed source ছিল। গবেষকরা বুঝতে পারলো free OS দরকার।' },
                            { year: '1983', title: 'GNU Project শুরু', text: 'Richard Stallman শুরু করেন। লক্ষ্য: Everyone should have freedom. Compiler (GCC), Bash তৈরি হলো, কিন্তু Kernel missing ছিল।' },
                            { year: '1991', title: 'Linux Kernel জন্ম', text: 'Linus Torvalds, Finland-এর ছাত্র, নিজের PC-তে UNIX-like OS চালাতে চেয়ে প্রথম Linux Kernel তৈরি করেন (Free and open-source)।', highlight: true },
                            { year: '1992', title: 'Linux + GNU একত্রিত', text: 'Kernel + GNU tools = Complete user-friendly OS তৈরি হলো।' },
                            { year: '1993-95', title: 'প্রথম Popular Distributions', text: 'Slackware, Debian (1993), Red Hat (1994) রিলিজ হলো। Enterprise use শুরু।' },
                            { year: '2000s+', title: 'Linux everywhere', text: 'Ubuntu (2004) আসলো। Android (Linux based) বিলিয়ন ফোনে চললো। Cloud, IoT, Supercomputers—সব লিনাক্স নির্ভর হয়ে গেলো।' }
                        ]
                    }
                ]
            },

            // --- Distros ---
            {
                type: 'section',
                title: 'Linux Distributions (Distros) – Overview',
                subtitle: 'Linux distribution হলো Linux Kernel + User Space Tools + Applications একত্রিত করে তৈরি করা complete OS।',
                blocks: [
                    {
                        type: 'table',
                        headers: ['Category', 'Examples', 'Use Case'],
                        rows: [
                            ['<strong>Desktop Distros</strong>', 'Ubuntu, Debian, Linux Mint', 'Easy installation, GUI-based experience, beginner friendly.'],
                            ['<strong>Server/Enterprise</strong>', 'RHEL, CentOS, AlmaLinux', 'Commercial support, stable for enterprise servers.'],
                            ['<strong>Lightweight</strong>', 'Lubuntu, Puppy Linux', 'Low resource PCs, older hardware.'],
                            ['<strong>Security/Pen-testing</strong>', 'Kali Linux, Parrot', 'Ethical hacking, penetration testing tools pre-installed.'],
                            ['<strong>Rolling Release</strong>', 'Arch Linux, Manjaro', 'Bleeding-edge latest software features, advanced users.']
                        ]
                    },
                    {
                        type: 'lts-box',
                        title: 'LTS (Long Term Support) Version',
                        text: [
                            'LTS version হলো একটি Linux distribution release যা দীর্ঘ সময় (সাধারণত ৫ বছর) পর্যন্ত support ও security updates পায়। মূলত <strong>stability এবং reliability</strong> চাওয়ার জন্য তৈরি।',
                            '<em>উদাহরণ: Ubuntu 22.04 LTS (৫ বছরের সাপোর্ট)। বারবার আপগ্রেড ছাড়া একটানা কাজ করার জন্য প্রযোজ্য।</em>'
                        ]
                    }
                ]
            },

            // --- Windows vs Linux ---
            {
                type: 'section',
                title: 'Windows vs Linux (Comparison)',
                subtitle: '<em>খুব গুরুত্বপূর্ণ – Windows খারাপ, Linux ভালো – এমন বলবেন না। এদের design philosophy আলাদা, use-case আলাদা।</em> Properly configured Windows server খুব secure হতে পারে, আবার Poorly configured Linux server খুব insecure হতে পারে।',
                blocks: [
                    {
                        type: 'comparison',
                        items: [
                            {
                                header: '🪟 Windows',
                                cssClass: 'windows',
                                list: [
                                    '<strong>নিয়ন্ত্রণ:</strong> Microsoft তৈরি ও নিয়ন্ত্রণ করে। (Closed source)',
                                    '<strong>Cost:</strong> License কিনতে হয় (Paid)।',
                                    '<strong>কাস্টমাইজেশন:</strong> Limited. গাড়ির মতো, ইঞ্জিন বদলানো যায় না।',
                                    '<strong>File System:</strong> মূলত NTFS (C: drive)।',
                                    '<strong>Security:</strong> Desktop market বেশি তাই malware বেশি।'
                                ]
                            },
                            {
                                header: '🐧 Linux',
                                cssClass: 'linux',
                                list: [
                                    '<strong>নিয়ন্ত্রণ:</strong> বিশ্বব্যাপী Community তৈরি করে। (Open source)',
                                    '<strong>Cost:</strong> Free (Enterprise support বাদে)।',
                                    '<strong>কাস্টমাইজেশন:</strong> Full customization. বাইকের মতো, ইচ্ছেমতো মডিফাই করা যায়।',
                                    '<strong>File System:</strong> মূলত EXT4 (root /)।',
                                    '<strong>Security:</strong> Strong permission framework, Server exploit বেশি টার্গেট করে।'
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        questions: [
            { id: 1, text: "Linux আসলে কী?", options: ["শুধুমাত্র একটি Operating System", "একটি Kernel", "একটি হ্যাকিং টুল", "একটি সাধারণ সফটওয়্যার"], correctAnswer: 1 },
            { id: 2, text: "Kernel এর মূল কাজ কী?", options: ["ইউজারের সাথে কথা বলা", "স্ক্রিনে আইকন দেখানো", "সরাসরি hardware নিয়ন্ত্রণ করা", "ফাইল ম্যানেজার চালানো"], correctAnswer: 2 },
            { id: 3, text: "ISO file কী?", options: ["এটি নিজেই একটি OS", "এটি OS install করার প্যাকেট", "একটি হার্ডওয়্যার ড্রাইভার", "একটি প্রোগ্রামিং ভাষা"], correctAnswer: 1 },
            { id: 4, text: "Linux Kernel-এর স্রষ্টা কে?", options: ["Richard Stallman", "Bill Gates", "Linus Torvalds", "Steve Jobs"], correctAnswer: 2 },
            { id: 5, text: "নিচের কোনটি LTS (Long Term Support) এর বৈশিষ্ট্য?", options: ["দ্রুততম সফটওয়্যার আপডেট", "দীর্ঘ সময় পর্যন্ত security updates", "শুধু হ্যাকিং এর জন্য তৈরি", "সবচেয়ে নতুন পরীক্ষামূলক ফিচার"], correctAnswer: 1 }
        ]
    },

    // ========================================
    // CLASS 02 — 27 February 2026
    // ========================================
    '2026-02-27': {
        title: "Linux Command Line Environment",
        classNumber: 2,
        description: "Command Line, Terminal, Shell, Kernel, TTY, SSH এবং Linux Command-এর Basic Part নিয়ে বিস্তারিত আলোচনা।",
        sections: [
            // --- Command Line ---
            {
                type: 'section',
                title: 'Command Line কী?',
                blocks: [
                    { type: 'paragraph', text: 'ধরো তুমি কম্পিউটার দিয়ে কোনো কাজ করাতে চাও। তুমি দুইভাবে বলতে পারো:' },
                    { type: 'list', items: ['মাউস দিয়ে ক্লিক করে', 'লিখে কমান্ড দিয়ে'] },
                    { type: 'paragraph', text: 'লিখে কাজ বলার পদ্ধতিটাই হলো Command Line।' },
                    { type: 'highlight', text: '<strong>মানে: Command Line = কীবোর্ড দিয়ে লিখে কম্পিউটারকে নির্দেশ দেওয়া</strong>' },
                    { type: 'paragraph', text: 'লিখলে <code>date</code> → কম্পিউটার বর্তমান তারিখ ও সময় দেখাবে।' },
                    { type: 'terminal', commands: ['itbd@server:~$ date', 'Wed Feb 25 10:25:09 +06 2026'] },
                    { type: 'paragraph', text: 'লিখলে <code>whoami</code> → কম্পিউটার দেখাবে তুমি কোন user হিসেবে লগইন করে আছো।' },
                    { type: 'terminal', commands: ['itbd@server:~$ whoami', 'itbd'] }
                ]
            },

            // --- Terminal (Restaurant Analogy) ---
            {
                type: 'section',
                title: 'Terminal কী? (রেস্টুরেন্ট Analogy)',
                subtitle: 'ধরো তুমি একটা বড়, ব্যস্ত রেস্টুরেন্টে গেলে। ভেতরে কী কী আছে?',
                blocks: [
                    {
                        type: 'table',
                        headers: ['বাস্তব জগৎ (রেস্টুরেন্ট)', 'কম্পিউটার সিস্টেম অংশ', 'ব্যাখ্যা (সংক্ষেপে)'],
                        rows: [
                            ['তুমি (User)', '<strong>User</strong>', 'যে নির্দেশ/অর্ডার দেয়'],
                            ['টেবিল / অর্ডার কাউন্টার', '<strong>Terminal</strong>', 'যেখানে User ইনপুট দেয়'],
                            ['ওয়েটার / কাউন্টার স্টাফ', '<strong>Shell</strong>', 'User-এর নির্দেশ Kernel পর্যন্ত পৌঁছে দেয়'],
                            ['শেফ', '<strong>Kernel</strong>', 'মূল প্রসেসিং করে, কাজ বাস্তবায়ন করে'],
                            ['চুলা, হাঁড়ি, গ্যাস, ফ্রিজ', '<strong>Hardware</strong>', 'বাস্তব যন্ত্রপাতি যেখানে কাজ সম্পন্ন হয়'],
                            ['ম্যানেজার', '<strong>OS</strong>', 'পুরো সিস্টেম পরিচালনা ও সমন্বয় করে']
                        ]
                    },
                    {
                        type: 'timeline',
                        steps: [
                            { title: 'তুমি টেবিলে বসলে', text: '<strong>(Terminal)</strong>' },
                            { title: 'তুমি ওয়েটারকে অর্ডার দিলে', text: '<strong>(Shell)</strong>' },
                            { title: 'ওয়েটার ম্যানেজারের নিয়ম মেনে অর্ডার পাঠালো', text: '<strong>(OS)</strong>' },
                            { title: 'ম্যানেজার শেফকে বললো রান্না শুরু করতে', text: '<strong>(Kernel)</strong>', highlight: true },
                            { title: 'শেফ চুলা-হাঁড়ি ব্যবহার করে রান্না করলো', text: '<strong>(Hardware)</strong>', highlight: true },
                            { title: 'খাবার আবার ওয়েটার এনে তোমার সামনে দিল', text: '<strong>(Output)</strong>' }
                        ]
                    },
                    { type: 'alert', label: 'গুরুত্বপূর্ণ', text: 'তুমি সরাসরি: ❌ শেফকে ডাকতে পারো না ❌ চুলা ধরতে পারো না ❌ রান্নাঘরে ঢুকতে পারো না' },
                    { type: 'paragraph', text: '<strong>Linux-এ Terminal হলো সেই স্ক্রিন/উইন্ডো যেখানে তুমি কমান্ড লেখো।</strong> এটা নিজে রান্না করে না। এটা শুধু যোগাযোগের জায়গা।' }
                ]
            },

            // --- Shell & Kernel ---
            {
                type: 'section',
                title: 'Shell ও Kernel কী?',
                blocks: [
                    { type: 'paragraph', text: 'ধরো তুমি বললে: "একটা বিরিয়ানি দিন।" তোমার কথা কে শুনলো? ➔ ওয়েটার / কাউন্টার স্টাফ। এই লোকটাই হলো ➔ <strong>Shell</strong>।' },
                    {
                        type: 'cards',
                        items: [
                            { icon: '👤', title: 'Shell কী করে?', list: ['তোমার কথা শোনে', 'বোঝে', 'সঠিকভাবে ভেতরে পাঠায়', 'রান্না হয়ে গেলে ফলাফল এনে দেয়'] },
                            { icon: '⚙️', title: 'Linux-এ Kernel:', list: ['CPU ব্যবহার করে', 'RAM ব্যবহার করে', 'ডিস্ক ব্যবহার করে', 'আসল কাজটা করে'] }
                        ]
                    },
                    { type: 'highlight', text: '<strong>ঠিক তেমনি Linux-এ:</strong> একাধিক Terminal থাকতে পারে, একেকটায় আলাদা Shell চলতে পারে, আলাদা user লগইন থাকতে পারে।' }
                ]
            },

            // --- Shell vs Terminal Example ---
            {
                type: 'section',
                title: 'Shell vs Terminal (Example)',
                blocks: [
                    { type: 'terminal', commands: ['itbd@server:~$ date', 'Wed Feb 25 10:25:09 +06 2026', 'itbd@server:~$ whoami', 'itbd', 'itbd@server:~$ hostname', 'server'] },
                    { type: 'alert', label: 'Key Point', text: 'কালো উইন্ডো = Terminal (Terminal Emulator), আর ভেতরে যে $ দিয়ে কমান্ড নিচ্ছে = Shell' }
                ]
            },

            // --- Types of Shells ---
            {
                type: 'section',
                title: 'Types of Shells (বিভিন্ন প্রকার Shell)',
                blocks: [
                    {
                        type: 'table',
                        headers: ['Shell এর নাম', 'বৈশিষ্ট্য', 'Default System Example'],
                        rows: [
                            ['<strong>Bash</strong>', 'সবচেয়ে জনপ্রিয়, scripting সহজ', 'Ubuntu, CentOS, RHEL'],
                            ['<strong>Sh</strong>', 'পুরনো Unix shell', 'Legacy systems'],
                            ['<strong>Csh</strong>', 'C-ভাষার মত syntax', 'BSD Unix'],
                            ['<strong>Tcsh</strong>', 'Csh-এর উন্নত সংস্করণ', 'BSD/Unix'],
                            ['<strong>Ksh</strong>', 'Advanced scripting features', 'AIX, Solaris'],
                            ['<strong>Zsh</strong>', 'Modern shell, customization & plugins', 'macOS'],
                            ['<strong>Fish</strong>', 'Interactive use সহজ, color support', 'Newer Linux distros']
                        ]
                    },
                    { type: 'subheading', text: 'Switching Shells' },
                    { type: 'terminal', commands: ['itbd@server:~$ zsh', 'Command \'zsh\' not found...', 'itbd@server:~$ sudo apt install zsh', 'itbd@server:~$ zsh', 'server% echo $SHELL', '/bin/bash', 'server% echo $0', 'zsh', 'server% exit'] },
                    {
                        type: 'table',
                        headers: ['SL', 'কমান্ড', 'কী ঘটেছে', 'ব্যাখ্যা'],
                        rows: [
                            ['1', '<code>zsh</code>', 'Command not found', 'সিস্টেমে zsh ইনস্টল ছিল না'],
                            ['2', '<code>sudo apt install zsh</code>', 'Install শুরু', 'zsh ইনস্টল হয়েছে'],
                            ['3', '<code>zsh</code>', 'Shell চালু', 'zsh shell শুরু হয়েছে'],
                            ['4', '<code>echo $SHELL</code>', '/bin/bash', 'Default shell এখনও bash'],
                            ['5', '<code>echo $0</code>', 'zsh', 'বর্তমানে active shell হলো zsh'],
                            ['6', '<code>ps -p $$</code>', 'CMD = zsh', 'Process confirm করছে zsh চলছে'],
                            ['7', '<code>exit</code>', 'bash এ ফেরা', 'zsh থেকে বের হয়ে bash-এ ফিরেছে']
                        ]
                    },
                    { type: 'subheading', text: 'Changing Default Shell Permanently' },
                    { type: 'terminal', commands: ['itbd@server:~$ echo $SHELL', '/usr/bin/bash', 'itbd@server:~$ which zsh', '/usr/bin/zsh', 'itbd@server:~$ chsh -s /usr/bin/zsh', 'Password:', 'itbd@server:~$ exit'] },
                    {
                        type: 'table',
                        headers: ['ধাপ', 'কমান্ড', 'কী করবে', 'ফলাফল'],
                        rows: [
                            ['1', '<code>which zsh</code>', 'zsh এর path দেখাবে', '/usr/bin/zsh'],
                            ['2', '<code>chsh -s /usr/bin/zsh</code>', 'Default shell পরিবর্তন', 'bash → zsh হবে'],
                            ['3', '<code>exit</code>', 'সেশন বন্ধ', 'নতুন login প্রয়োজন'],
                            ['4', 'আবার login', 'নতুন shell চালু হবে', 'auto zsh চালু হবে'],
                            ['5', '<code>echo $SHELL</code>', 'verify করবে', '/usr/bin/zsh দেখাবে']
                        ]
                    }
                ]
            },

            // --- Shell Facts & Prompt Structure ---
            {
                type: 'section',
                title: 'Shell Facts & Prompt Structure',
                blocks: [
                    {
                        type: 'numbered-facts',
                        items: [
                            { title: 'RHEL-এর Default Shell', text: 'Red Hat Enterprise Linux (RHEL)-এ ডিফল্ট শেল হলো <strong>bash</strong> (GNU Bourne-Again Shell)। bash হলো পুরনো UNIX শেল Bourne Shell (sh)-এর উন্নত সংস্করণ।' },
                            { title: 'Shell Prompt কী?', text: 'যখন শেল interactive ভাবে ব্যবহার করা হয়, তখন এটি একটি লেখা দেখায়—এটাই shell prompt। এটি বোঝায় যে শেল এখন ইউজারের কমান্ড নেওয়ার জন্য প্রস্তুত।' },
                            { title: 'Normal User Prompt ($)', text: 'সাধারণ ইউজার লগইন করলে প্রম্পট <code>$</code> চিহ্ন দিয়ে শেষ হয়। উদাহরণ: <code>[user@host ~]$</code>' },
                            { title: 'Root Prompt (#)', text: 'যদি শেল root (superuser) হিসেবে চালানো হয়, তাহলে <code>$</code> এর জায়গায় <code>#</code> থাকে। উদাহরণ: <code>[root@host ~]#</code>' },
                            { title: 'Bash এর শক্তি', text: 'bash শুধু কমান্ড চালানোর জন্য না, এটি একটি শক্তিশালী scripting language। এটি দিয়ে automation, task scheduling, এবং জটিল কাজ করা যায়।' }
                        ]
                    },
                    { type: 'subheading', text: 'Shell Prompt Structure' },
                    {
                        type: 'prompt-structure',
                        parts: [
                            { label: '১) User', value: 'itbd' },
                            { label: '②', value: '@' },
                            { label: '২) Hostname', value: 'server' },
                            { label: '③', value: ': ' },
                            { label: '৩) Directory', value: '~ ' },
                            { label: '৪) Type', value: '$' }
                        ]
                    },
                    {
                        type: 'cards',
                        items: [
                            { icon: '1️⃣', title: 'itbd (User)', text: 'এটা হলো বর্তমানে যে ইউজার দিয়ে লগইন করা হয়েছে।' },
                            { icon: '2️⃣', title: 'server (Hostname)', text: 'এটা সিস্টেমের hostname। মানে এই কম্পিউটার/সার্ভারের নাম।' },
                            { icon: '3️⃣', title: '~ (Working Directory)', text: '<code>~</code> মানে লগইন করা ইউজারের হোম ডিরেক্টরি। যদি <code>/etc</code> তে থাকতো তাহলে <code>/etc</code> দেখাতো।' },
                            { icon: '4️⃣', title: '$ / # (User Type)', text: '<code>$</code> → Normal User<br><code>#</code> → Superuser (root)' }
                        ]
                    }
                ]
            },

            // --- Shell Command Basic Parts ---
            {
                type: 'section',
                title: "Shell Command-এর Basic Part",
                subtitle: 'যখন আমরা shell prompt-এ কোনো command লিখি, সেটা সাধারণত ৩টা অংশে ভাগ করা যায়। পুরো লাইনটাকে বলা হয়: <strong>Command Line</strong>',
                blocks: [
                    {
                        type: 'table',
                        headers: ['অংশ', 'বিবরণ', 'উদাহরণ'],
                        rows: [
                            ['<strong>1. Command</strong>', 'যে প্রোগ্রামটি চালাতে চাই। সবসময় শুরুতে থাকে।', '<code>ls</code>, <code>useradd</code>, <code>hostnamectl</code>'],
                            ['<strong>2. Options (Flags)</strong>', 'command-এর আচরণ পরিবর্তন করে। <code>-</code> বা <code>--</code> দিয়ে শুরু হয়।', '<code>-l</code>, <code>-a</code>, <code>-L</code>'],
                            ['<strong>3. Arguments</strong>', 'target বা value যেগুলোর উপর command কাজ করে।', '<code>user01</code>, <code>/etc</code>']
                        ]
                    },
                    {
                        type: 'comparison',
                        items: [
                            { header: 'Example 1: usermod -L user01', cssClass: 'windows', list: ['<strong>Command:</strong> <code>usermod</code>', '<strong>Option:</strong> <code>-L</code> (lock option)', '<strong>Argument:</strong> <code>user01</code> (target object)'] },
                            { header: 'Example 2: hostnamectl set-hostname ITBD-Training', cssClass: 'linux', list: ['<strong>Command:</strong> <code>hostnamectl</code>', '<strong>Arg 1:</strong> <code>set-hostname</code> (action)', '<strong>Arg 2:</strong> <code>ITBD-Training</code> (value)'] }
                        ]
                    },
                    { type: 'alert', label: 'Special Note', text: 'অনেক command আছে যেগুলো কোনো option/argument ছাড়াই চলতে পারে (যেমন <code>date</code>, <code>whoami</code>, <code>pwd</code>)। আবার কিছু command আছে যেগুলো argument ছাড়া চলেই না (যেমন <code>cp file1 file2</code>)।' }
                ]
            },

            // --- Login Methods ---
            {
                type: 'section',
                title: 'Logging in to a Local Computer',
                subtitle: 'Shell চালাতে হলে আগে কম্পিউটারে লগইন করতে হবে।',
                blocks: [
                    {
                        type: 'cards',
                        items: [
                            { icon: '🖥️', title: '1. Physical Console', text: 'কম্পিউটারের সাথে সরাসরি monitor + keyboard যুক্ত থাকলে সেটাকে বলে Physical Console।' },
                            { icon: '🖧', title: '2. Virtual Console (TTY)', text: 'Linux একাধিক login session একসাথে চালাতে পারে। <code>Ctrl + Alt + F1</code> থেকে <code>F6</code> দিয়ে switch করা যায়।' },
                            { icon: '🖱️', title: '3. Graphical Login (GUI)', text: 'Graphical environment চালু হবে, তারপর terminal program খুলতে হবে। Server-এ সাধারণত GUI চালানো হয় না।' }
                        ]
                    },
                    { type: 'subheading', text: 'RHEL 8 / 9 TTY Table Mapping' },
                    {
                        type: 'table',
                        headers: ['TTY', 'ব্যবহার', 'সহজ ভাষায়'],
                        rows: [
                            ['<strong>tty1</strong>', 'Graphical login + GUI session (GNOME)', 'GUI চালানোর জন্য'],
                            ['<strong>tty2–tty6</strong>', 'Text login (CLI)', 'শুধুমাত্র keyboard দিয়ে CLI login']
                        ]
                    }
                ]
            },

            // --- SSH ---
            {
                type: 'section',
                title: 'Remote Login over Network (SSH)',
                subtitle: 'অনেক সার্ভার <strong>headless</strong> – অর্থাৎ, physical monitor, keyboard বা mouse নেই।',
                blocks: [
                    { type: 'highlight', title: 'Headless Server কী?', text: 'সার্ভার/VM নিজের জন্য কোনো physical screen, keyboard, mouse নেই। ব্যবহারকারীকে কাজ network বা remote interface (SSH/RDP) দিয়ে করতে হয়।' },
                    { type: 'subheading', text: 'SSH (Secure Shell)' },
                    { type: 'paragraph', text: 'Linux এবং macOS-এ built-in ssh command-line tool আছে। SSH encrypts the connection, তাই communication, password বা data safe থাকে।' },
                    { type: 'terminal', commands: ['ssh remoteuser@remotehost', "remoteuser@remotehost's password: ********", '[remoteuser@remotehost ~]$'] },
                    { type: 'subheading', text: 'Public Key Authentication (password-less login)' },
                    { type: 'paragraph', text: 'কিছু systems (যেমন cloud instances) password login allow করে না। এর বিকল্প হলো public/private key authentication।' },
                    { type: 'terminal', commands: ['ssh -i ~/.ssh/my_private_key remoteuser@remotehost'] },
                    { type: 'paragraph', text: 'এখানে <code>-i</code> option ব্যবহার করে private key specify করা হচ্ছে।' }
                ]
            }
        ],
        questions: [
            { id: 6, text: "Command Line-এর ৩টি অংশ কী কী?", options: ["Terminal, Shell, Kernel", "Command, Options, Arguments", "User, Hostname, Directory", "Hardware, OS, Software"], correctAnswer: 1 },
            { id: 7, text: "Shell prompt-এ ~ চিহ্নটি কী নির্দেশ করে?", options: ["Root directory", "Working directory", "Home directory", "Previous directory"], correctAnswer: 2 },
            { id: 8, text: "$ চিহ্নটি কোন ধরনের user নির্দেশ করে?", options: ["Superuser (root)", "Normal (standard) user", "System user", "Guest user"], correctAnswer: 1 },
            { id: 9, text: "Remote login secure করার protocol কোনটি?", options: ["FTP", "HTTP", "SSH (Secure Shell)", "Telnet"], correctAnswer: 2 },
            { id: 10, text: "RHEL-এর Default Shell কোনটি?", options: ["Zsh", "Fish", "Bash (Bourne Again Shell)", "Sh"], correctAnswer: 2 }
        ]
    }
};

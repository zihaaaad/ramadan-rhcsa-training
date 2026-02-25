// Data for classes
const classData = {
    '2026-02-24': {
        title: "Introduction & Kernel vs OS",
        description: "Linux কী, Kernel এবং OS এর পার্থক্য, Linux এর ইতিহাস এবং ডিস্ট্রিবিউশন নিয়ে বিস্তারিত আলোচনা।",
        status: "published",
        content: `
            <div class="lesson-intro">
                <h2>Introduction</h2>
                <div class="quote-block">
                    <p>"আজ আমরা যে জিনিসটা শুরু করতে যাচ্ছি, সেটার নাম Linux। অনেকে নাম শুনে ভয় পায়। ভাবে এটা খুব কঠিন। কিন্তু আমি শুরুতেই একটা কথা পরিষ্কার বলি <strong>Linux কঠিন না। Linux শুধু নতুন।</strong>"</p>
                    <p>"আপনি যদি Windows ব্যবহার করতে পারেন, আপনি যদি একটি মোবাইল ব্যবহার করতে পারেন, তাহলে আপনি Linux শিখতে পারবেন – ১০০% নিশ্চিত।"</p>
                </div>
                <p><strong>Linux মানে শুধু কালো স্ক্রিন না। Linux মানে শুধু হ্যাকিংও না। Linux মানে হলো – নিজের সিস্টেমের উপর পূর্ণ Control।</strong></p>
                <p>Linux আসলে একটি Kernel – অর্থাৎ Operating System-এর core অংশ, যা সরাসরি hardware নিয়ন্ত্রণ করে। এই Linux Kernel-কে ভিত্তি করে তৈরি হওয়া Operating System দিয়েই Google, Facebook, Amazon-এর মতো বিশ্বের বড় বড় কোম্পানির server চলে। আজ আমরা সেই Linux Kernel-ভিত্তিক Operating System শেখা শুরু করছি।</p>
                
                <div class="terminal-block">
                    <code>uname -r<br>6.8.0-31-generic</code>
                </div>
                
                <div class="highlight-box success">
                    <h3>Linux = ২০% Concept, ৮০% Practice</h3>
                    <p>"Linux হলো হাতে-কলমে শেখার জিনিস। এখানে theory আছে – কিন্তু theory যথেষ্ট না।" আপনি যত বেশি command টাইপ করবেন, যত বেশি system explore করবেন, তত দ্রুত Linux আপনার কাছে পরিষ্কার হবে। ভুল করবেন – এটা স্বাভাবিক। Error দেখবেন – এটাও স্বাভাবিক। <strong>Linux-এ ভুল করা মানে ব্যর্থ হওয়া না। Linux-এ ভুল করা মানে system-কে আরও গভীরভাবে বোঝা।</strong></p>
                    <p>"Linux শেখা মানে শুধু Operating System শেখা না – Problem solve করার mindset শেখা। আজ থেকে আমরা শুধু user না – আমরা system বুঝতে শিখবো।"</p>
                </div>
            </div>

            <div class="lesson-section">
                <h2>Definitions: Kernel vs OS</h2>
                <div class="cards-grid">
                    <div class="info-card">
                        <div class="card-icon">⚙️</div>
                        <h3>Kernel (কার্নেল) কী?</h3>
                        <p>Kernel হলো OS-এর core অংশ, যেটা সরাসরি hardware-এর সাথে কথা বলে।</p>
                        <ul class="feature-list">
                            <li><strong>CPU কে বলে:</strong> কোন কাজ কখন করবে</li>
                            <li><strong>RAM কে বলে:</strong> কে কত মেমরি পাবে</li>
                            <li><strong>Disk কে বলে:</strong> কোথায় পড়বে/লিখবে</li>
                            <li>Keyboard, Mouse, Network card চালায়</li>
                        </ul>
                        <div class="alert-note">
                            <strong>Note:</strong> তুমি দেখতে পাও আসতে পাও না, সরাসরি ব্যবহার করো না, কিন্তু সব কাজ Kernel ছাড়া অসম্ভব। Kernel ছাড়া কম্পিউটার = মৃত লোহা।
                        </div>
                    </div>
                    <div class="info-card">
                        <div class="card-icon">💻</div>
                        <h3>Operating System (OS) কী?</h3>
                        <p>Operating System হলো পুরো সিস্টেম, যেটা তুমি ব্যবহার করো।</p>
                        <ul class="feature-list">
                            <li><strong>Kernel</strong></li>
                            <li><strong>Desktop / GUI</strong></li>
                            <li><strong>Terminal / Shell</strong></li>
                            <li><strong>File Manager & System Tools</strong></li>
                        </ul>
                        <div class="alert-note">
                            <strong>Note:</strong> OS তোমার সাথে কথা বলে, তোমার কমান্ড বোঝে এবং Kernel-কে দিয়ে কাজ করায়।
                        </div>
                    </div>
                </div>
            </div>

            <div class="lesson-section">
                <h2>Process Flow: How it Works</h2>
                <p>সম্পর্কটা কেমন? সবচেয়ে গুরুত্বপূর্ণ: নিচের ফ্লোটা মাথায় রাখুন। ঘটনা: তুমি "My Computer / This PC"- এ Double-Click করলে।</p>
                
                <div class="process-timeline">
                    <div class="process-step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>User Input → OS</h4>
                            <p><strong>Step 1: তুমি (User):</strong> তুমি Mouse দিয়ে double-click করলে। এখানে তুমি শুধু OS-এর সাথে কাজ করছো। তুমি CPU, RAM কিছুই জানো না। Mouse / Keyboard event OS ধরে।</p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>OS Processing</h4>
                            <p><strong>Step 2:</strong> OS বলে: "ওহ, User 'This PC' খুলতে চায়"। OS Mouse event ধরেছে, বুঝেছে কোন icon-এ click হয়েছে এবং File Explorer চালু করার সিদ্ধান্ত নিয়েছে। এখনো Kernel কিছু করেনি।</p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>OS → Kernel</h4>
                            <p><strong>Step 3:</strong> OS এখন Kernel-কে বলে: "এই process (File Explorer) চালু করো", "Disk থেকে Drive information এনে দাও"।</p>
                        </div>
                    </div>
                    <div class="process-step highlight">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h4>Kernel → Hardware (আসল কাজ)</h4>
                            <p><strong>Step 4:</strong> Kernel এখন CPU-কে বলে process চালাতে, RAM-এ জায়গা দেয় এবং Disk driver ব্যবহার করে C:, D: drive-এর তথ্য আনে। <em>Kernel এখানে সরাসরি Hardware চালাচ্ছে।</em></p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="step-number">5</div>
                        <div class="step-content">
                            <h4>Kernel → OS</h4>
                            <p><strong>Step 5:</strong> Kernel বলে: "এই নাও data (Drive list, space, status)", OS তখন সুন্দর করে GUI বানায়, Icon দেখায় এবং Window ওপেন করে।</p>
                        </div>
                    </div>
                    <div class="process-step end">
                        <div class="step-number">6</div>
                        <div class="step-content">
                            <h4>OS → Screen Output</h4>
                            <p><strong>Step 6:</strong> তুমি ফলাফল দেখো (Local Disk C:, D: ইত্যাদি)। কাজ শেষ।</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lesson-section">
                <h2>Common Questions & ISO Files</h2>
                <div class="qa-container">
                    <div class="qa-item">
                        <h4><span class="q-mark">Q:</span> Linux কি OS নাকি Kernel?</h4>
                        <p><strong>উত্তর:</strong> Linux নিজে হলো Kernel, অর্থাৎ OS-এর core যা সরাসরি hardware-কে নিয়ন্ত্রণ করে। Kernel ছাড়া কোন program/hardware ঠিকভাবে কাজ করতে পারে না।</p>
                    </div>
                    <div class="qa-item">
                        <h4><span class="q-mark">Q:</span> তাহলে OS কোনগুলো?</h4>
                        <p><strong>উত্তর:</strong> OS হলো Kernel + User Space। User Space বলতে বোঝায়: Desktop / GUI, Terminal, File Manager ইত্যাদি। অর্থাৎ, User-কে যা ব্যবহার করার সুবিধা দেয়, সেটা মিলে OS হয়।</p>
                    </div>
                    <div class="qa-item">
                        <h4><span class="q-mark">Q:</span> ডিস্ট্রিবিউশনগুলোকে কি OS বলতে পারি?</h4>
                        <p><strong>উত্তর:</strong> হ্যাঁ, ১০০% পারি। উদাহরণ: Ubuntu, CentOS। কারণ এগুলো Linux Kernel + User Space একত্রিত করে।</p>
                    </div>
                    <div class="qa-item">
                        <h4><span class="q-mark">Q:</span> ISO file আসলে কী? এটা কি OS?</h4>
                        <p><strong>উত্তর:</strong> ISO ফাইলটা নিজে OS না, এটা হলো OS install করার প্যাকেট (Install image)। এর ভিতরে Kernel, System files, Installer, Driver থাকে। ISO দিয়ে Bootable USB বানিয়ে OS install করা হয়। (<strong>ISO ≠ OS</strong>, ISO → OS বানায়)।</p>
                    </div>
                </div>
            </div>

            <div class="lesson-section">
                <h2>Linux History (ইতিহাস)</h2>
                <div class="history-timeline">
                    <div class="history-item">
                        <div class="year">1980s</div>
                        <div class="details">
                            <h4>UNIX-এর যুগ</h4>
                            <p>UNIX তখনকার সবচেয়ে শক্তিশালী OS ছিল কিন্তু দামি এবং closed source ছিল। গবেষকরা বুঝতে পারলো free OS দরকার।</p>
                        </div>
                    </div>
                    <div class="history-item">
                        <div class="year">1983</div>
                        <div class="details">
                            <h4>GNU Project শুরু</h4>
                            <p>Richard Stallman শুরু করেন। লক্ষ্য: Everyone should have freedom. Compiler (GCC), Bash তৈরি হলো, কিন্তু Kernel missing ছিল।</p>
                        </div>
                    </div>
                    <div class="history-item highlight">
                        <div class="year">1991</div>
                        <div class="details">
                            <h4>Linux Kernel জন্ম</h4>
                            <p>Linus Torvalds, Finland-এর ছাত্র, নিজের PC-তে UNIX-like OS চালাতে চেয়ে প্রথম Linux Kernel তৈরি করেন (Free and open-source)।</p>
                        </div>
                    </div>
                    <div class="history-item">
                        <div class="year">1992</div>
                        <div class="details">
                            <h4>Linux + GNU একত্রিত</h4>
                            <p>Kernel + GNU tools = Complete user-friendly OS তৈরি হলো।</p>
                        </div>
                    </div>
                    <div class="history-item">
                        <div class="year">1993-95</div>
                        <div class="details">
                            <h4>প্রথম Popular Distributions</h4>
                            <p>Slackware, Debian (1993), Red Hat (1994) রিলিজ হলো। Enterprise use শুরু।</p>
                        </div>
                    </div>
                    <div class="history-item">
                        <div class="year">2000s+</div>
                        <div class="details">
                            <h4>Linux everywhere</h4>
                            <p>Ubuntu (2004) আসলো। Android (Linux based) বিলিয়ন ফোনে চললো। Cloud, IoT, Supercomputers—সব লিনাক্স নির্ভর হয়ে গেলো।</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lesson-section">
                <h2>Linux Distributions (Distros) – Overview</h2>
                <p>Linux distribution হলো Linux Kernel + User Space Tools + Applications একত্রিত করে তৈরি করা complete OS।</p>
                
                <div class="table-responsive">
                    <table class="modern-table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Examples</th>
                                <th>Use Case</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Desktop Distros</strong></td>
                                <td>Ubuntu, Debian, Linux Mint</td>
                                <td>Easy installation, GUI-based experience, beginner friendly.</td>
                            </tr>
                            <tr>
                                <td><strong>Server/Enterprise</strong></td>
                                <td>RHEL, CentOS, AlmaLinux</td>
                                <td>Commercial support, stable for enterprise servers.</td>
                            </tr>
                            <tr>
                                <td><strong>Lightweight</strong></td>
                                <td>Lubuntu, Puppy Linux</td>
                                <td>Low resource PCs, older hardware.</td>
                            </tr>
                            <tr>
                                <td><strong>Security/Pen-testing</strong></td>
                                <td>Kali Linux, Parrot</td>
                                <td>Ethical hacking, penetration testing tools pre-installed.</td>
                            </tr>
                            <tr>
                                <td><strong>Rolling Release</strong></td>
                                <td>Arch Linux, Manjaro</td>
                                <td>Bleeding-edge latest software features, advanced users.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="lts-box mt-4">
                    <h3>LTS (Long Term Support) Version</h3>
                    <p>LTS version হলো একটি Linux distribution release যা দীর্ঘ সময় (সাধারণত ৫ বছর) পর্যন্ত support ও security updates পায়। মূলত <strong>stability এবং reliability</strong> চাওয়ার জন্য তৈরি।</p>
                    <p><em>উদাহরণ: Ubuntu 22.04 LTS (৫ বছরের সাপোর্ট)। বারবার আপগ্রেড ছাড়া একটানা কাজ করার জন্য প্রযোজ্য।</em></p>
                </div>
            </div>

            <div class="lesson-section">
                <h2>Windows vs Linux (Comparison)</h2>
                <p><em>খুব গুরুত্বপূর্ণ – Windows খারাপ, Linux ভালো – এমন বলবেন ফেব্রুয়ারি না। এদের design philosophy আলাদা, use-case আলাদা।</em> Properly configured Windows server খুব secure হতে পারে, আবার Poorly configured Linux server খুব insecure হতে পারে।</p>
                
                <div class="comparison-grid mt-4">
                    <div class="comp-card windows">
                        <div class="comp-header">🪟 Windows</div>
                        <ul class="comp-list">
                            <li><strong>নিয়ন্ত্রণ:</strong> Microsoft তৈরি ও নিয়ন্ত্রণ করে। (Closed source)</li>
                            <li><strong>Cost:</strong> License কিনতে হয় (Paid)।</li>
                            <li><strong>কাস্টমাইজেশন:</strong> Limited. গাড়ির মতো, ইঞ্জিন বদলানো যায় না।</li>
                            <li><strong>File System:</strong> মূলত NTFS (C: drive)।</li>
                            <li><strong>Security:</strong> Desktop market বেশি তাই malware বেশি।</li>
                        </ul>
                    </div>
                    <div class="comp-card linux">
                        <div class="comp-header">🐧 Linux</div>
                        <ul class="comp-list">
                            <li><strong>নিয়ন্ত্রণ:</strong> বিশ্বব্যাপী Community তৈরি করে। (Open source)</li>
                            <li><strong>Cost:</strong> Free (Enterprise support বাদে)।</li>
                            <li><strong>কাস্টমাইজেশন:</strong> Full customization. বাইকের মতো, ইচ্ছেমতো মডিফাই করা যায়।</li>
                            <li><strong>File System:</strong> মূলত EXT4 (root /)।</li>
                            <li><strong>Security:</strong> Strong permission framework, Server exploit বেশি টার্গেট করে।</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
        questions: [
            {
                id: 1,
                text: "Linux আসলে কী?",
                options: [
                    "শুধুমাত্র একটি Operating System",
                    "একটি Kernel",
                    "একটি হ্যাকিং টুল",
                    "একটি সাধারণ সফটওয়্যার"
                ],
                correctAnswer: 1
            },
            {
                id: 2,
                text: "Kernel এর মূল কাজ কী?",
                options: [
                    "ইউজারের সাথে কথা বলা",
                    "স্ক্রিনে আইকন দেখানো",
                    "সরাসরি hardware নিয়ন্ত্রণ করা",
                    "ফাইল ম্যানেজার চালানো"
                ],
                correctAnswer: 2
            },
            {
                id: 3,
                text: "ISO file কী?",
                options: [
                    "এটি নিজেই একটি OS",
                    "এটি OS install করার প্যাকেট",
                    "একটি হার্ডওয়্যার ড্রাইভার",
                    "একটি প্রোগ্রামিং ভাষা"
                ],
                correctAnswer: 1
            },
            {
                id: 4,
                text: "Linux Kernel-এর স্রষ্টা কে?",
                options: [
                    "Richard Stallman",
                    "Bill Gates",
                    "Linus Torvalds",
                    "Steve Jobs"
                ],
                correctAnswer: 2
            },
            {
                id: 5,
                text: "নিচের কোনটি LTS (Long Term Support) এর বৈশিষ্ট্য?",
                options: [
                    "দ্রুততম সফটওয়্যার আপডেট",
                    "দীর্ঘ সময় পর্যন্ত security updates",
                    "শুধু হ্যাকিং এর জন্য তৈরি",
                    "সবচেয়ে নতুন পরীক্ষামূলক ফিচার"
                ],
                correctAnswer: 1
            }
        ]
    },
    '2026-02-26': {
        title: "File System & Commands",
        description: "Linux File System Hierarchy এবং বেসিক কমান্ড লাইন অপারেশন।",
        status: "upcoming",
        content: "",
        questions: []
    }
};

//#region node_modules/.nitro/vite/services/ssr/assets/scoring-bXQEcAc0.js
var EXAM_SECONDS = 3e3;
var QUESTIONS = [
	{
		id: "q1",
		domain: "Professional presence",
		kind: "match",
		prompt: "You just graduated from college and were hired into your first career position. Your goal is to advance quickly, so you want to be recognized as a professional.",
		instruction: "Mark each statement True or False.",
		labels: [{
			id: "true",
			label: "True"
		}, {
			id: "false",
			label: "False"
		}],
		items: [
			{
				id: "separate",
				text: "Your personal online accounts for email and social media should be kept separate from professional business accounts."
			},
			{
				id: "personal-posts",
				text: "It is acceptable for you to post personal messages on the company's social media accounts."
			},
			{
				id: "merge",
				text: "You should merge your personal and professional identities."
			},
			{
				id: "review",
				text: "Your employer might review your social media accounts."
			}
		],
		correct: {
			separate: "true",
			"personal-posts": "false",
			merge: "false",
			review: "true"
		},
		explanation: "Keep personal and professional identities separate. Employers commonly review social media, and company accounts are never the place for personal posts."
	},
	{
		id: "q2",
		domain: "Listening and delivery",
		kind: "match",
		prompt: "You recently attended a college lecture about effective listening skills. You want to practice these skills when you attend your other classes.",
		instruction: "Select Yes if the skill is an effective listening skill, or No if it is not.",
		labels: [{
			id: "yes",
			label: "Yes"
		}, {
			id: "no",
			label: "No"
		}],
		items: [
			{
				id: "facing",
				text: "Facing the speaker"
			},
			{
				id: "intonation",
				text: "Moderating intonation and enunciation"
			},
			{
				id: "attention",
				text: "Keeping your attention on the message"
			},
			{
				id: "defer",
				text: "Deferring judgement"
			}
		],
		correct: {
			facing: "yes",
			intonation: "no",
			attention: "yes",
			defer: "yes"
		},
		explanation: "Effective listening includes facing the speaker, staying with the message, and deferring judgment. Intonation and enunciation are speaking skills, not listening skills."
	},
	{
		id: "q3",
		domain: "Listening and delivery",
		kind: "multi",
		selectCount: 2,
		prompt: "You are giving instructions to a classroom of high school students about how to conduct research using the scientific method.",
		instruction: "Which two options are examples of effective nonverbal skills you should use during your presentation?",
		options: [
			{
				id: "enunciating",
				text: "Enunciating key words"
			},
			{
				id: "facing",
				text: "Facing the audience"
			},
			{
				id: "intonation",
				text: "Moderating intonation"
			},
			{
				id: "questions",
				text: "Responding to questions"
			},
			{
				id: "eye",
				text: "Making eye contact"
			},
			{
				id: "volume",
				text: "Increasing volume to emphasize a point"
			}
		],
		correct: ["facing", "eye"],
		explanation: "Facing the audience and making eye contact are nonverbal. Enunciation, intonation, volume, and answering questions are verbal."
	},
	{
		id: "q4",
		domain: "Audience and environment",
		kind: "single",
		prompt: "A non-profit organization has hired you to write messaging for a series of posters designed to influence readers about climate change.",
		instruction: "What is the first step you should take before writing your message?",
		options: [
			{
				id: "size",
				text: "Find out the size of the posters"
			},
			{
				id: "budget",
				text: "Consider the budget for the campaign"
			},
			{
				id: "audience",
				text: "Identify the audience demographics"
			},
			{
				id: "artist",
				text: "Hire a visual design artist"
			}
		],
		correct: "audience",
		explanation: "Know the audience before you write. Size, budget, and design support the message; they do not define it."
	},
	{
		id: "q5",
		domain: "Audience and environment",
		kind: "single",
		prompt: "You are preparing a lesson about Healthy Living for an event sponsored by a coalition of Christian churches. The coalition has provided demographic data: 85% of attendees are Christian, all are single mothers, education level is unknown, and more than half are widowed.",
		instruction: "What demographics should you consider to maximize the effectiveness of your message on Healthy Living?",
		options: [
			{
				id: "age-edu-marital",
				text: "Age, education, and marital status"
			},
			{
				id: "marital-gender-religion",
				text: "Marital status, gender, and religion"
			},
			{
				id: "religion-race-gender",
				text: "Religion, race, and gender"
			},
			{
				id: "gender-age-race",
				text: "Gender, age, and race"
			}
		],
		correct: "marital-gender-religion",
		explanation: "The known facts are marital status (single, widowed), gender (mothers), and religion (Christian). Age, education, and race were not provided."
	},
	{
		id: "q6",
		domain: "Audience and environment",
		kind: "match",
		prompt: "You've prepared a high-energy presentation with an emotional message for a 300-seat room with a projector, large screen, and podium microphone. You expect lots of interaction. When you begin, only one person attends, sitting in the back.",
		instruction: "Select Yes if the element affects your message, or No if it does not.",
		labels: [{
			id: "yes",
			label: "Yes"
		}, {
			id: "no",
			label: "No"
		}],
		items: [
			{
				id: "handouts",
				text: "Number of handouts you prepared"
			},
			{
				id: "av",
				text: "The availability of audio and visual equipment"
			},
			{
				id: "room",
				text: "Size of the room"
			},
			{
				id: "audience",
				text: "Audience size"
			}
		],
		correct: {
			handouts: "no",
			av: "yes",
			room: "yes",
			audience: "yes"
		},
		explanation: "Room size, audience size, and A/V setup change how you deliver the message. How many handouts you printed does not."
	},
	{
		id: "q7",
		domain: "Audience and environment",
		kind: "single",
		prompt: "You've been asked to speak for a 1-hour presentation at a large conference. The session is in a ballroom that holds 500 people, and about 465 people have enrolled.",
		instruction: "What environmental factor must you consider that could impact your message?",
		options: [
			{
				id: "traffic",
				text: "The traffic getting to the conference center"
			},
			{
				id: "weather",
				text: "Bad weather"
			},
			{
				id: "audio",
				text: "Audio equipment"
			},
			{
				id: "attendance",
				text: "How many people attend your presentation"
			}
		],
		correct: "audio",
		explanation: "For a 500-person ballroom you must plan for audio. Traffic and weather are outside the room; enrollment is already known."
	},
	{
		id: "q8",
		domain: "Message types and purpose",
		kind: "match",
		prompt: "You are taking a course in Business Communications and are learning to distinguish between different types of messaging.",
		instruction: "Match each example to Informative, Persuasive, or Motivational.",
		labels: [
			{
				id: "informative",
				label: "Informative"
			},
			{
				id: "persuasive",
				label: "Persuasive"
			},
			{
				id: "motivational",
				label: "Motivational"
			}
		],
		items: [
			{
				id: "chem",
				text: "A chemistry professor instructing a class of students before beginning a lab."
			},
			{
				id: "rally",
				text: "Speakers shouting to people walking past a protest rally."
			},
			{
				id: "debate",
				text: "Political candidates soliciting votes during a televised debate."
			}
		],
		correct: {
			chem: "informative",
			rally: "motivational",
			debate: "persuasive"
		},
		explanation: "Lab instructions teach (informative). Rally speakers try to stir people to act (motivational). Candidates asking for votes try to change a choice (persuasive)."
	},
	{
		id: "q9",
		domain: "Legal and ethical",
		kind: "multi",
		selectCount: 4,
		prompt: "You've downloaded two hit songs from the Internet and incorporated them into a presentation for a large regional conference. You will be representing your company. Your supervisor asks if you can legally use the songs. You say you believe you can because they are for educational purposes.",
		instruction: "Which four factors would a court judge evaluate to resolve a copyright Fair Use dispute?",
		options: [
			{
				id: "purpose",
				text: "Purpose of the copy"
			},
			{
				id: "date",
				text: "The date the copy was obtained from a website"
			},
			{
				id: "nature",
				text: "Nature of the work that was copied"
			},
			{
				id: "amount",
				text: "Amount of the work copied"
			},
			{
				id: "friend",
				text: "Copy was of an original bought by a friend or family member"
			},
			{
				id: "market",
				text: "Effect of the copy's use on the potential market"
			},
			{
				id: "training",
				text: "If the copy is of work published to support training"
			}
		],
		correct: [
			"purpose",
			"nature",
			"amount",
			"market"
		],
		explanation: "Fair Use has four statutory factors: purpose, nature of the work, amount copied, and effect on the potential market."
	},
	{
		id: "q10",
		domain: "Legal and ethical",
		kind: "multi",
		selectCount: 2,
		prompt: "A company hired you to promote a new industry certification. Your presentation includes a video of three hiring directors testifying about the credibility the certification adds to job applicants. You want no legal or ethical issues.",
		instruction: "Which two actions should you perform to avoid legal or ethical issues?",
		options: [
			{
				id: "names",
				text: "Display the name and company of each hiring director during the video segment of their testimony."
			},
			{
				id: "access",
				text: "Ensure that your presentation meets accessibility standards."
			},
			{
				id: "location",
				text: "Obtain a location release for the site where you will present."
			},
			{
				id: "strip",
				text: "Remove all personal information from your presentation."
			},
			{
				id: "releases",
				text: "Obtain model releases for any recognizable people in your presentation."
			}
		],
		correct: ["access", "releases"],
		explanation: "Presentations must meet accessibility standards, and recognizable people in video need model releases. A conference venue does not require a location release."
	},
	{
		id: "q11",
		domain: "Channels and media",
		kind: "match",
		prompt: "The corporation where you work has offices worldwide. You use a variety of communication technologies every day.",
		instruction: "Match the most appropriate channel to each situation.",
		labels: [
			{
				id: "text",
				label: "Text message"
			},
			{
				id: "phone",
				label: "Phone call"
			},
			{
				id: "video",
				label: "Video conference"
			},
			{
				id: "email",
				label: "Email"
			}
		],
		items: [
			{
				id: "late",
				text: "Notifying friends you will be a few minutes late"
			},
			{
				id: "urgent",
				text: "Urgent information to share with your supervisor"
			},
			{
				id: "interview",
				text: "Job interview with a committee"
			},
			{
				id: "article",
				text: "Sharing a news article with a coworker"
			}
		],
		correct: {
			late: "text",
			urgent: "phone",
			interview: "video",
			article: "email"
		},
		explanation: "Short social updates go by text. Urgent matters get a call. A committee interview needs video. An article is best shared by email."
	},
	{
		id: "q12",
		domain: "Summarizing",
		kind: "single",
		prompt: "The CEO and several vice presidents are off-site. You are in charge. Shortly before lunch there is a small explosion in a break room. Julie Smith is found unconscious and taken to the hospital. 911 was called. The fire department is evacuating three buildings. Several employees are driving away. You need to notify absent upper management quickly.",
		instruction: "How should you summarize your message?",
		options: [
			{
				id: "group-text",
				text: "Send a group text to upper management stating that there has been an explosion in one of the break rooms, Julie Smith has been taken to the hospital, and the fire department is evacuating everyone else."
			},
			{
				id: "ceo-later",
				text: "Send a text to the CEO requesting he call you at his earliest convenience because employees are leaving the work site without permission."
			},
			{
				id: "email-blame",
				text: "Send an email to the upper management group explaining there was an explosion, an employee was found unconscious, and the incident was not your fault."
			},
			{
				id: "voicemail",
				text: "Call the CEO several times because his phone is on silent mode. Leave a voicemail message each time asking him to call you."
			}
		],
		correct: "group-text",
		explanation: "In an emergency, send a fast, factual summary to all of upper management. Do not wait, shift blame, or bury the incident in a callback request."
	},
	{
		id: "q13",
		domain: "Summarizing",
		kind: "single",
		prompt: "You are preparing a presentation to your HOA about adding Internet service to HOA benefits. The outline covers resident survey results, current costs, bulk offerings, equipment costs, proposed fee increases, and 5-year maintenance costs. You need a summary for the monthly newsletter.",
		instruction: "How should you summarize your presentation for the HOA monthly newsletter?",
		options: [
			{
				id: "survey",
				text: "Survey says residents want Internet included in our HOA benefits."
			},
			{
				id: "safety",
				text: "Providing residents Internet service as an HOA benefit will ensure our children and elderly will be kept safe from inappropriate content."
			},
			{
				id: "free",
				text: "Including Internet service in our HOA benefits gives each resident phone and TV at no additional cost."
			}
		],
		correct: "survey",
		explanation: "A summary should capture the purpose without inventing guarantees or claiming phone and TV are free. The presentation is about adding Internet as an HOA benefit."
	},
	{
		id: "q14",
		domain: "Listening and delivery",
		kind: "multi",
		selectCount: 3,
		prompt: "You are preparing an outline for a presentation. After you prepare the outline, you will develop the slides to support it.",
		instruction: "Which three actions will help you prepare an effective speaking outline?",
		options: [
			{
				id: "citations",
				text: "Include citations"
			},
			{
				id: "quotes",
				text: "Include quotes"
			},
			{
				id: "purpose",
				text: "Include the purpose"
			},
			{
				id: "embed",
				text: "Embed images and videos"
			},
			{
				id: "full",
				text: "Use full sentences"
			},
			{
				id: "keywords",
				text: "Use keywords or phrases"
			}
		],
		correct: [
			"citations",
			"purpose",
			"keywords"
		],
		explanation: "A speaking outline uses keywords or phrases, states the purpose, and includes citations for oral attribution. Full sentences belong in a preparation outline; media belongs on slides."
	},
	{
		id: "q15",
		domain: "Interviews and careers",
		kind: "order",
		prompt: "You are creating a resume.",
		instruction: "Place the components in the most commonly accepted order.",
		options: [
			{
				id: "work",
				text: "Work history with dates of employment, job title, and company name"
			},
			{
				id: "schools",
				text: "Names of your schools and diploma or degree received"
			},
			{
				id: "objective",
				text: "Opening statement of the type of work you are seeking"
			},
			{
				id: "refs",
				text: "References"
			},
			{
				id: "name",
				text: "Your name and contact information"
			}
		],
		correct: [
			"name",
			"objective",
			"work",
			"schools",
			"refs"
		],
		explanation: "Standard order is contact information, objective, work history, education, then references."
	},
	{
		id: "q16",
		domain: "Visual design",
		kind: "match",
		prompt: "You are taking a course in Business Communications and are learning about visual design.",
		instruction: "Match each description to Balance, Proximity, or Contrast.",
		labels: [
			{
				id: "balance",
				label: "Balance"
			},
			{
				id: "proximity",
				label: "Proximity"
			},
			{
				id: "contrast",
				label: "Contrast"
			}
		],
		items: [
			{
				id: "types",
				text: "Asymmetrical, symmetrical, and radial"
			},
			{
				id: "related",
				text: "Elements closer together are more related"
			},
			{
				id: "bw",
				text: "The difference between black and white in images"
			}
		],
		correct: {
			types: "balance",
			related: "proximity",
			bw: "contrast"
		},
		explanation: "Balance has symmetrical, asymmetrical, and radial forms. Proximity groups related items. Contrast is the difference between elements, including black and white."
	},
	{
		id: "q17",
		domain: "Visual design",
		kind: "single",
		prompt: "You are preparing an end-of-year report on the sales performance of key products manufactured by your company.",
		instruction: "Which visual presentation option is best for showing trends in data?",
		options: [
			{
				id: "table",
				text: "Table"
			},
			{
				id: "bar",
				text: "Bar Chart"
			},
			{
				id: "line",
				text: "Line Chart"
			},
			{
				id: "pie",
				text: "Pie Chart"
			}
		],
		correct: "line",
		explanation: "Line charts are the standard choice for showing change and trends over time."
	},
	{
		id: "q18",
		domain: "Visual design",
		kind: "single",
		prompt: "You work for a Department of Tourism promoting snow-sport resorts. You want to organize data so it can be sorted and filtered by category (resort name, snow depth, acreage, lifts, ticket prices).",
		instruction: "Which is the best visual tool for organizing data so it can be sorted and filtered?",
		options: [
			{
				id: "table",
				text: "Table"
			},
			{
				id: "bar",
				text: "Bar Chart"
			},
			{
				id: "line",
				text: "Line Chart"
			},
			{
				id: "pie",
				text: "Pie Chart"
			}
		],
		correct: "table",
		explanation: "Tables support sorting and filtering by column. Charts display comparisons, not row-level filtering."
	},
	{
		id: "q19",
		domain: "Interviews and careers",
		kind: "match",
		prompt: "You are preparing for a job interview. You want to portray an image of professionalism.",
		instruction: "Mark each scenario Appropriate or Inappropriate.",
		labels: [{
			id: "appropriate",
			label: "Appropriate"
		}, {
			id: "inappropriate",
			label: "Inappropriate"
		}],
		items: [
			{
				id: "research",
				text: "Research what attire is expected by the interviewing committee."
			},
			{
				id: "cologne",
				text: "Apply your favorite cologne or perfume."
			},
			{
				id: "bathe",
				text: "Bathe and groom properly."
			},
			{
				id: "unique",
				text: "Choose attire and grooming that communicates your unique personality."
			}
		],
		correct: {
			research: "appropriate",
			cologne: "inappropriate",
			bathe: "appropriate",
			unique: "inappropriate"
		},
		explanation: "Research expected attire and groom carefully. Heavy fragrance and highly personal style can distract from a professional image."
	},
	{
		id: "q20",
		domain: "Audience and environment",
		kind: "multi",
		selectCount: 2,
		prompt: "You are a motivational speaker. You travel all over the world teaching people how to improve their Business Communication Skills.",
		instruction: "Which two environmental variables are involved in delivering an effective message?",
		options: [
			{
				id: "location",
				text: "Location"
			},
			{
				id: "jargon",
				text: "Jargon"
			},
			{
				id: "grooming",
				text: "Grooming"
			},
			{
				id: "technology",
				text: "Technology"
			},
			{
				id: "attire",
				text: "Attire"
			}
		],
		correct: ["location", "technology"],
		explanation: "Location and technology are environmental variables. Jargon is language. Grooming and attire are personal appearance."
	},
	{
		id: "q21",
		domain: "Audience and environment",
		kind: "match",
		prompt: "You tutor first-year Business Communication students. A midterm is approaching. You are reviewing topics with a group of 30 students and notice most of them are confused about the information you are presenting.",
		instruction: "Select Yes if the method will help adapt your message, or No if it will not.",
		labels: [{
			id: "yes",
			label: "Yes"
		}, {
			id: "no",
			label: "No"
		}],
		items: [
			{
				id: "homework",
				text: "Analyze their homework questions."
			},
			{
				id: "reexplain",
				text: "Identify the area of confusion and explain it differently."
			},
			{
				id: "ask",
				text: "Ask the students if they have any questions."
			},
			{
				id: "review-all",
				text: "Review all of the topics again."
			},
			{
				id: "handouts",
				text: "Provide handouts of basic business terms and definitions."
			}
		],
		correct: {
			homework: "no",
			reexplain: "yes",
			ask: "yes",
			"review-all": "no",
			handouts: "yes"
		},
		explanation: "Adapt in the moment: find the confusion, explain it another way, invite questions, and scaffold with definitions. Replaying every topic or grading old homework does not fix live confusion."
	},
	{
		id: "q22",
		domain: "Audience and environment",
		kind: "single",
		prompt: "It is your goal to always deliver effective messaging and to adapt your messages to the audience whenever appropriate.",
		instruction: "During the presentation, which is the best way to collect indirect feedback from your audience to help you adapt your message?",
		options: [
			{
				id: "sponsor",
				text: "Schedule breaks to talk to the person who engaged you to speak."
			},
			{
				id: "before",
				text: "Contact your audience the day before to ask what they hope to learn."
			},
			{
				id: "body",
				text: "Watch your audience for body language."
			},
			{
				id: "food",
				text: "Serve refreshments."
			}
		],
		correct: "body",
		explanation: "Indirect feedback during a talk is what you observe: posture, faces, attention. Asking in advance is direct, and it happens before the presentation."
	},
	{
		id: "q23",
		domain: "Summarizing",
		kind: "single",
		prompt: "A coworker asked you to attend a meeting. You take notes: the marketing campaign for new products launches on February 2nd. Three events will be held in Los Angeles, Paris, and Tokyo. Employees attending must submit travel requests to Marketing by January 1st. Only economy class airfare is allowed. All travel must be booked through the new company travel agency.",
		instruction: "How should you summarize the following information?",
		options: [
			{
				id: "cities",
				text: "New products are being released in Los Angeles, Paris, and Tokyo."
			},
			{
				id: "dates",
				text: "The new product launch is February 2nd. The deadline to submit your travel request is January 1st."
			},
			{
				id: "agency",
				text: "The company has hired a new travel agency. All travel must be booked with them."
			},
			{
				id: "cuts",
				text: "Expenses are being cut and everyone must now fly economy class."
			}
		],
		correct: "dates",
		explanation: "A useful summary keeps the action dates. The cities host events, not product releases, and expense cuts were never stated."
	},
	{
		id: "q24",
		domain: "Summarizing",
		kind: "single",
		prompt: "Your store transfers data from an old computer to a new one free of charge only within 48 hours of purchase. A customer returns 3 months later wanting a free transfer. You explain the policy. She becomes angry, leaves before you can offer a solution, and posts negative comments on social media. Your boss asks what happened.",
		instruction: "How should you summarize the verbal incident that occurred between you and the customer?",
		options: [
			{
				id: "facts",
				text: "You denied the customer a courtesy data transfer onto a computer she purchased 3 months ago. She got angry and left before you could resolve the matter."
			},
			{
				id: "threat",
				text: "Customer threatened you on social media for something you didn't do."
			},
			{
				id: "stop-free",
				text: "The store should no longer transfer data for free."
			},
			{
				id: "lifetime",
				text: "The store should perform free data transfers for the life of the computer."
			}
		],
		correct: "facts",
		explanation: "A summary of an incident is factual and complete. Do not invent a threat or turn the report into a policy recommendation."
	},
	{
		id: "q25",
		domain: "Summarizing",
		kind: "multi",
		selectCount: 3,
		prompt: "A campus flyer states: Beginning March 10th, the north parking lot will be closed for resurfacing and striping for about 2 weeks. Students should not park in residential neighborhoods north of campus; city officials will ticket illegally parked vehicles. Temporary student parking will be available near the east soccer field.",
		instruction: "What are three key points of this message?",
		options: [
			{
				id: "all-lots",
				text: "The university is resurfacing all of the student parking lots."
			},
			{
				id: "bikes",
				text: "Students should stop driving cars and ride bicycles because it is better for the environment."
			},
			{
				id: "stripe-time",
				text: "It takes approximately 2 weeks to stripe a parking lot."
			},
			{
				id: "tickets",
				text: "Cars illegally parked in surrounding neighborhoods will be ticketed."
			},
			{
				id: "temp",
				text: "Temporary parking is available near the east soccer field."
			},
			{
				id: "closed",
				text: "The north parking lot will be closed from March 10th for 2 weeks."
			}
		],
		correct: [
			"tickets",
			"temp",
			"closed"
		],
		explanation: "The flyer’s key points are the north-lot closure, the ticket warning, and the temporary lot. It does not resurface every lot or tell students to give up cars."
	},
	{
		id: "q26",
		domain: "Customer service",
		kind: "single",
		prompt: "A customer calls a computer support center. He talks very fast and seems frustrated. He is a college student who cannot upload his midterm from his laptop, has class in 10 minutes, and says the computer has never worked right.",
		instruction: "You want to clarify the issue so you can help the customer. How should you appropriately respond?",
		options: [
			{
				id: "password",
				text: "Ask the student, \"What username and password you are using?\""
			},
			{
				id: "hold",
				text: "Put the student on hold so you can research the issue."
			},
			{
				id: "wifi",
				text: "Ask if the student has Wi-Fi."
			},
			{
				id: "paraphrase",
				text: "Paraphrase by asking, \"So, you're calling to get help uploading a file?\""
			}
		],
		correct: "paraphrase",
		explanation: "Clarify by paraphrasing the problem. Do not ask for a password, jump to Wi-Fi, or park a panicked caller on hold."
	},
	{
		id: "q27",
		domain: "Workplace communication",
		kind: "single",
		prompt: "Your supervisor promoted you to night manager and listed responsibilities only you should perform: close out the registers and lock the money in the safe, inventory shipment boxes, set the alarm, and lock the store.",
		instruction: "Which response could you give to appropriately clarify this message?",
		options: [
			{
				id: "important",
				text: "Which task is the most important?"
			},
			{
				id: "order",
				text: "In what order shall I perform these tasks?"
			},
			{
				id: "notime",
				text: "What happens if I don't have time to do all of these tasks?"
			},
			{
				id: "noship",
				text: "What if there are no shipments to inventory?"
			}
		],
		correct: "order",
		explanation: "A closing checklist is a sequence. Asking for the order clarifies the message without challenging the assignment."
	},
	{
		id: "q28",
		domain: "Legal and ethical",
		kind: "match",
		prompt: "You are interviewing for a management position at a small electronics store. You've been asked to provide several documents.",
		instruction: "Mark whether it is Legal or Illegal for the interviewer to request each document.",
		labels: [{
			id: "legal",
			label: "Legal"
		}, {
			id: "illegal",
			label: "Illegal"
		}],
		items: [
			{
				id: "voter",
				text: "A copy of your voter registration card"
			},
			{
				id: "work-auth",
				text: "Proof of U.S. citizenship or a copy of your work permit or visa"
			},
			{
				id: "credit",
				text: "Photocopy of a credit card"
			},
			{
				id: "refs",
				text: "References from previous employers"
			}
		],
		correct: {
			voter: "illegal",
			"work-auth": "legal",
			credit: "illegal",
			refs: "legal"
		},
		explanation: "Employers may request work authorization and job references. Voter registration and a credit-card photocopy are not job-related and are improper."
	},
	{
		id: "q29",
		domain: "Interviews and careers",
		kind: "single",
		prompt: "Since you were a child you have wanted a career as an animator at a well-known studio that produces award-winning family films. You are finishing your junior year of high school and beginning to shop post-secondary programs.",
		instruction: "What action can you take to help you acquire your dream job after you finish your schooling?",
		options: [
			{
				id: "aid",
				text: "Write to dozens of schools and pick one that offers financial assistance."
			},
			{
				id: "fun",
				text: "Attend a few classes and choose courses that are the most fun."
			},
			{
				id: "studio",
				text: "Meet with a hiring manager at the film studio where you want to work and ask what preparation the studio seeks in the ideal applicant."
			},
			{
				id: "counselor",
				text: "Meet with your high school career counselor and ask for assistance with selecting a post-secondary school."
			}
		],
		correct: "studio",
		explanation: "Ask the employer what they hire for, then build that preparation. Fun classes and aid packages are not a career strategy."
	},
	{
		id: "q30",
		domain: "Interviews and careers",
		kind: "single",
		prompt: "You finish warehouse work two hours before a nearby interview. Instead of going home, you unwind with friends, eat pizza, and go straight to the interview. You arrive on time looking a bit dirty and smelling like pizza.",
		instruction: "What mistake was made?",
		options: [
			{
				id: "later",
				text: "You should have scheduled the interview for a later time."
			},
			{
				id: "early",
				text: "You should have arrived 2 hours early to the interview to show how much you want the position."
			},
			{
				id: "friend",
				text: "You should have brought one of your friends to your interview."
			},
			{
				id: "shower",
				text: "You should have gone home to shower and change attire."
			}
		],
		correct: "shower",
		explanation: "Professional presence starts with being clean and dressed for the interview. Arriving dirty from work and pizza is the mistake."
	},
	{
		id: "q31",
		domain: "Listening and delivery",
		kind: "single",
		prompt: "You are delivering a presentation and watching the room for engagement.",
		instruction: "Which body language tells you a listener is not engaged with your presentation?",
		options: [
			{
				id: "phone",
				text: "Chin down, staring at a phone"
			},
			{
				id: "lean",
				text: "Leaning forward and listening to you"
			},
			{
				id: "watch",
				text: "Watching you intently"
			},
			{
				id: "faces",
				text: "Facial expressions are responding to your message"
			}
		],
		correct: "phone",
		explanation: "A chin-down phone stare is disengagement. Leaning in, watching you, and responsive faces are signs of attention."
	},
	{
		id: "q32",
		domain: "Workplace communication",
		kind: "multi",
		selectCount: 2,
		prompt: "You must send an email to an employee in another department.",
		instruction: "Which two recipients should you include in the Courtesy Copy (CC) line?",
		options: [
			{
				id: "your-dept",
				text: "All employees in your department"
			},
			{
				id: "their-boss",
				text: "The recipient's supervisor"
			},
			{
				id: "your-boss",
				text: "Your supervisor"
			},
			{
				id: "their-dept",
				text: "All employees in the recipient's department"
			},
			{
				id: "ceo",
				text: "The CEO of the company"
			},
			{
				id: "all",
				text: "All employees in the company"
			}
		],
		correct: ["their-boss", "your-boss"],
		explanation: "Cross-department mail is copied to both supervisors so each chain of command stays informed. Do not CC entire departments or the CEO."
	},
	{
		id: "q33",
		domain: "Workplace communication",
		kind: "single",
		prompt: "You are collaborating with a group of coworkers on a project.",
		instruction: "How can you make sure everybody is updated on the project?",
		options: [
			{
				id: "daily",
				text: "Hold daily meetings and require everyone involved in the project to attend."
			},
			{
				id: "copies",
				text: "Send multiple copies of all communication to everyone involved."
			},
			{
				id: "group",
				text: "Form a message group of the coworkers involved and send all communication to the group."
			},
			{
				id: "boss",
				text: "Send copies of every communication to your supervisor."
			}
		],
		correct: "group",
		explanation: "A shared message group keeps the team aligned without forcing daily meetings or flooding inboxes with duplicate copies."
	},
	{
		id: "q34",
		domain: "Workplace communication",
		kind: "multi",
		selectCount: 3,
		prompt: "You are being harassed by a coworker on the work site. This has been happening every other week on payday for the past two months.",
		instruction: "Which three communications should you make within the business hierarchy to address this harassment?",
		options: [
			{
				id: "ceo",
				text: "Report the harassment to the CEO of the company."
			},
			{
				id: "supervisor",
				text: "Report the harassment to your supervisor."
			},
			{
				id: "all-email",
				text: "Send a company-wide email reporting the harassment."
			},
			{
				id: "hr",
				text: "Report the harassment to your Human Resources Department."
			},
			{
				id: "payroll",
				text: "Report the harassment to the Payroll Department."
			},
			{
				id: "coworker",
				text: "Notify the coworker that you feel you are being harassed and to stop."
			}
		],
		correct: [
			"supervisor",
			"hr",
			"coworker"
		],
		explanation: "Tell the person to stop if you can do so safely, then report to your supervisor and HR. Do not blast the company or skip to payroll or the CEO first."
	},
	{
		id: "q35",
		domain: "Customer service",
		kind: "order",
		prompt: "You work in a call center supporting video conferencing. A distressed customer reports she is unable to connect to her company's live broadcast.",
		instruction: "Place the communications in the correct order.",
		options: [
			{
				id: "verify",
				text: "Ask appropriate questions to verify whether the customer has the minimum hardware and software required for the video conference."
			},
			{
				id: "assure",
				text: "Assure the customer that you will help her."
			},
			{
				id: "reset",
				text: "If the customer has adequate hardware and software, reset her connection and instruct her to reboot and log in again."
			},
			{
				id: "cannot",
				text: "If the customer does not have the minimum hardware and software, gently inform her she will not be able to participate in the video conference and encourage her to talk to her company supervisor."
			},
			{
				id: "greet",
				text: "Greet the customer in a friendly tone and ask her to describe the problem."
			},
			{
				id: "document",
				text: "Document the telephone call. Include the identified problem, possible solutions, and actions taken. Either mark the issue as resolved or escalate it to the appropriate team member for follow-up."
			}
		],
		correct: [
			"greet",
			"assure",
			"verify",
			"reset",
			"cannot",
			"document"
		],
		explanation: "Greet, reassure, diagnose, try the fix or explain the limit, then document. That is the standard support sequence."
	},
	{
		id: "q36",
		domain: "Customer service",
		kind: "multi",
		selectCount: 3,
		prompt: "You work for a retail toy store. A woman wants to return a toy she purchased for her grandson. She reports that the toy does not work and shows you her receipt.",
		instruction: "Which three ways could you appropriately respond to the customer?",
		options: [
			{
				id: "apologize",
				text: "Apologize for the inconvenience."
			},
			{
				id: "replace",
				text: "Offer to replace the toy with the same model or another of equal value."
			},
			{
				id: "warranty",
				text: "Ask the customer to show you the warranty for the toy."
			},
			{
				id: "manufacturer",
				text: "Inform the customer you will contact the manufacturer of the toy for operating instructions."
			},
			{
				id: "birthday",
				text: "Ask the customer for her email address so you can send her grandson a birthday card."
			},
			{
				id: "refund",
				text: "Offer to refund the customer's money."
			}
		],
		correct: [
			"apologize",
			"replace",
			"refund"
		],
		explanation: "With a receipt for a broken toy, apologize and offer a replacement or refund. Do not demand a warranty, stall with the manufacturer, or ask for a child’s birthday details."
	},
	{
		id: "q37",
		domain: "Message types and purpose",
		kind: "match",
		prompt: "The CEO of a large company calls a Sales meeting. He encourages employees to promote a new product and offers incentives. He then spends 30 minutes on performance results, specifications, and facts comparing the product to competitors. The meeting is high energy. At the end he asks each salesperson to commit to a quota based on the incentive they want to earn.",
		instruction: "Complete each statement.",
		labels: [
			{
				id: "informative",
				label: "Informative"
			},
			{
				id: "persuasive",
				label: "Persuasive"
			},
			{
				id: "motivational",
				label: "Motivational"
			},
			{
				id: "ethics",
				label: "Ethics"
			},
			{
				id: "emotions",
				label: "Emotions"
			},
			{
				id: "logic",
				label: "Logic"
			},
			{
				id: "culture",
				label: "Culture"
			}
		],
		items: [{
			id: "type",
			text: "The message type in this scenario is",
			labels: [
				"informative",
				"persuasive",
				"motivational"
			]
		}, {
			id: "appeal",
			text: "The message uses this to influence the listener",
			labels: [
				"ethics",
				"emotions",
				"logic",
				"culture"
			]
		}],
		correct: {
			type: "motivational",
			appeal: "emotions"
		},
		explanation: "Incentives, energy, and a call to commit to a quota make this a motivational message. It influences listeners through emotion as well as the supporting facts."
	},
	{
		id: "q38",
		domain: "Audience and environment",
		kind: "match",
		prompt: "You have been hired to teach high school biology in Guam. Most students are native to the island with Chamorro or Filipino surnames. You want their respect from the first day so you can deliver effective lessons.",
		instruction: "Complete each statement.",
		labels: [
			{
				id: "names",
				label: "Pronounce the students' names"
			},
			{
				id: "nicknames",
				label: "Give students English nicknames"
			},
			{
				id: "ignore",
				label: "Ignore cultural differences"
			},
			{
				id: "slang",
				label: "Use only mainland slang"
			},
			{
				id: "jargon",
				label: "Jargon"
			},
			{
				id: "roads",
				label: "Road ways"
			},
			{
				id: "mistakes",
				label: "Mistakes"
			},
			{
				id: "recipes",
				label: "Recipes"
			}
		],
		items: [{
			id: "help",
			text: "Ask another teacher or staff member to help you",
			labels: [
				"names",
				"nicknames",
				"ignore",
				"slang"
			]
		}, {
			id: "study",
			text: "Study the culture of the island and learn the local",
			labels: [
				"jargon",
				"roads",
				"mistakes",
				"recipes"
			]
		}],
		correct: {
			help: "names",
			study: "jargon"
		},
		explanation: "Learn to say students’ names and study local language. Respect for names and culture earns the right to teach."
	},
	{
		id: "q39",
		domain: "Visual design",
		kind: "image",
		prompt: "Select the image that is the best example of the design principle known as Proximity.",
		instruction: "Tap the image that best shows proximity — related elements grouped together.",
		options: [
			{
				id: "hands-icons",
				image: "hands-icons",
				caption: "Scattered icons held in open hands"
			},
			{
				id: "four-hands",
				image: "four-hands",
				caption: "Four hands meeting at a single center point"
			},
			{
				id: "kids-group",
				image: "kids-group",
				caption: "Children sitting close together as a group"
			},
			{
				id: "molecule",
				image: "molecule",
				caption: "A repeating hexagonal molecular grid"
			}
		],
		correct: "kids-group",
		explanation: "Proximity means related items sit close together. The clustered group of children is the clearest example. A center handshake is unity; a grid is repetition; scattered icons are not grouped."
	},
	{
		id: "q40",
		domain: "Legal and ethical",
		kind: "match",
		prompt: "You manage a band that plays music for Christian audiences and now has two hit albums. An event organizer asks the band to perform a public concert where 50% of ticket sales will be donated to a selection of charities.",
		instruction: "Mark each response Appropriate or Inappropriate.",
		labels: [{
			id: "appropriate",
			label: "Appropriate"
		}, {
			id: "inappropriate",
			label: "Inappropriate"
		}],
		items: [
			{
				id: "paid",
				text: "How much will the band be paid?"
			},
			{
				id: "only-christians",
				text: "Will you guarantee that only Christians will attend?"
			},
			{
				id: "staff",
				text: "We won't play if you hire non-Christians to work at the concert."
			},
			{
				id: "charities",
				text: "Which specific charities will be receiving the donations?"
			}
		],
		correct: {
			paid: "appropriate",
			"only-christians": "inappropriate",
			staff: "inappropriate",
			charities: "appropriate"
		},
		explanation: "Asking about pay and which charities receive funds is professional. Restricting a public concert by religion is not."
	},
	{
		id: "q41",
		domain: "Workplace communication",
		kind: "match",
		prompt: "You are the scribe for a non-profit organization. You are preparing the minutes from your most recent meeting.",
		instruction: "Select True if you should follow the statement, or False if you should not.",
		labels: [{
			id: "true",
			label: "True"
		}, {
			id: "false",
			label: "False"
		}],
		items: [
			{
				id: "one-page",
				text: "Limit the minutes to one page."
			},
			{
				id: "datetime",
				text: "Include the date and the time the meeting started and ended."
			},
			{
				id: "outline",
				text: "Outline all topics discussed in the order discussed."
			},
			{
				id: "fonts",
				text: "Use a variety of fonts and colors to make the minutes looking interesting."
			},
			{
				id: "names",
				text: "Cite the names of the individuals who proposed new ideas or who strongly supported or opposed topics."
			}
		],
		correct: {
			"one-page": "false",
			datetime: "true",
			outline: "true",
			fonts: "false",
			names: "true"
		},
		explanation: "Minutes record date, times, topics in order, and who moved or opposed items. They are not capped at one page and should not be decorated."
	},
	{
		id: "q42",
		domain: "Professional presence",
		kind: "multi",
		selectCount: 2,
		prompt: "Using social media, you often share jokes with your friends and make fun of people.",
		instruction: "Which two perceptions might readers have about you based on your social media posts?",
		options: [
			{
				id: "smart",
				text: "You must be very intelligent."
			},
			{
				id: "playful",
				text: "You like people and are playful."
			},
			{
				id: "witty",
				text: "You are witty and popular."
			},
			{
				id: "empathy",
				text: "You lack empathy."
			},
			{
				id: "comedian",
				text: "You should change professions and become a comedian."
			},
			{
				id: "disrespect",
				text: "You are disrespectful."
			}
		],
		correct: ["empathy", "disrespect"],
		explanation: "Making fun of people reads as a lack of empathy and as disrespect. Employers and colleagues will judge the public record."
	}
];
var TOTAL_QUESTIONS = QUESTIONS.length;
function sameSet(a, b) {
	if (a.length !== b.length) return false;
	const set = new Set(a);
	return b.every((id) => set.has(id));
}
function sameRecord(a, b) {
	const keys = Object.keys(b);
	if (keys.length !== Object.keys(a).length) return false;
	return keys.every((key) => a[key] === b[key]);
}
function isAnswerComplete(question, answer) {
	if (answer == null) return false;
	switch (question.kind) {
		case "single":
		case "image": return typeof answer === "string" && answer.length > 0;
		case "multi": return Array.isArray(answer) && answer.length === question.selectCount;
		case "order": return Array.isArray(answer) && answer.length === question.options.length;
		case "match":
			if (typeof answer !== "object" || Array.isArray(answer) || answer == null) return false;
			return question.items.every((item) => typeof answer[item.id] === "string");
	}
}
function gradeQuestion(question, answer) {
	if (answer == null) return false;
	switch (question.kind) {
		case "single":
		case "image": return typeof answer === "string" && answer === question.correct;
		case "multi": return Array.isArray(answer) && sameSet(answer, question.correct);
		case "order": return Array.isArray(answer) && answer.length === question.correct.length && answer.every((id, i) => id === question.correct[i]);
		case "match": return typeof answer === "object" && !Array.isArray(answer) && sameRecord(answer, question.correct);
	}
}
function gradeExam(answers) {
	const details = QUESTIONS.map((question) => ({
		id: question.id,
		ok: gradeQuestion(question, answers[question.id]),
		answer: answers[question.id] ?? null
	}));
	const score = details.filter((d) => d.ok).length;
	const total = QUESTIONS.length;
	const percent = total === 0 ? 0 : Math.round(score / total * 100);
	return {
		score,
		total,
		percent,
		passed: percent >= 70,
		details
	};
}
function domainBreakdown(answers) {
	const map = /* @__PURE__ */ new Map();
	for (const question of QUESTIONS) {
		const cur = map.get(question.domain) ?? {
			score: 0,
			total: 0
		};
		cur.total += 1;
		if (gradeQuestion(question, answers[question.id])) cur.score += 1;
		map.set(question.domain, cur);
	}
	return [...map.entries()].map(([domain, value]) => ({
		domain,
		score: value.score,
		total: value.total,
		percent: value.total === 0 ? 0 : Math.round(value.score / value.total * 100)
	})).sort((a, b) => b.percent - a.percent || a.domain.localeCompare(b.domain));
}
//#endregion
export { gradeExam as a, domainBreakdown as i, QUESTIONS as n, gradeQuestion as o, TOTAL_QUESTIONS as r, isAnswerComplete as s, EXAM_SECONDS as t };

import { Injectable } from '@nestjs/common';
import { Question } from './entities/question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
  @InjectRepository(Question)
  private questionRepository: Repository<Question>;

  async getOne(): Promise<Question> {
    const questions = await this.questionRepository.find();
    return questions[questions.length * Math.random()];
  }

  async findAll(): Promise<Question[]> {
    return await this.questionRepository.find();
  }

  async generate() {
    const questions = [
      `Well, would you look at that! The week gracefully bowed out, our production stayed as steady as a rock, and miraculously, no one decided to give the database a gravity check. As for tomorrow? It's an official holiday for the hustle – a chance to ditch the grind and embrace the tranquility. So, picture this: Are you leaning toward a rebellious rendezvous with junky delights, a thrilling PS5 odyssey, and the fine art of "chillaxing," or do you have some even cooler plans up your sleeve?`,
      `Ah, the enchanting realm of remote work, where pajama bottoms pass as professional attire and the commute consists of navigating from bed to desk. Isn't it a splendid adventure? Oh, absolutely, it's all rainbows and unicorns. And, just to sprinkle some extra glitter, remember that this delightful bot is under the benevolent domain of CT, so perpetual happiness is the order of the day. No exceptions. Our vigilant culture keepers may be making their rounds, but fret not, these stealthy inquiries shall remain securely hidden in the shadows. Now, since we're on the topic of clandestine escapades, care to share a nostalgic tale of the time you harbored a ridiculously amusing secret back in the days of yore?`,
      `Ah, the siren call of the written word, beckoning us into worlds unknown. Who could resist such allure? The promise of relaxation, the acquisition of knowledge, the dance of imagination – it's a literary feast for the senses. But, let's not forget those elusive creatures who, after a mere two pages, find themselves wrapped in the cozy embrace of slumber's embrace (…). But hark, now that we've delved into the realm of dreams, what enchanting scenario frequently graces your subconscious landscape?`,
      `Hats off to the ingenious minds of CT engineers who've orchestrated the symphony of human brilliance, enabling us to fling video content to every corner of the world at a latency so minuscule it defies belief. And let's not overlook those not-yet-CT-affiliated heroes responsible for bequeathing us with the comedic gems and enthralling tapestries of The Office, The Big Bang Theory, Friends, and the enigmatic Mr. Robot. But, enough about them; let's chat about you. Which series has captivated your senses to the point that you've indulged in more than one binge session, all in the noble pursuit of filling your cranial expanse with the finest form of emptiness?`,
      `Time to set aside the pretenses and engage in a bout of real talk. Our profession might be the stuff of dreams, yet just for a fleeting moment, let your imagination run wild. If you were to venture into an entirely disparate realm, one untethered from the realms of technology, what alternate career path would you dare to tread?`,
      `we all know 'all you can eat' and the extreme food challenges some of us decide to embark randomly. Absolutely nothing against those people, even tho they are probably the worst guests to invite over for dinner. Can you imagine? what if, you could have dinner with any historical figure, who would and one more thing. Do you think this historical figure will be a good guests or an horrible pain? "Greetings, fellow adventurer in the digital realm! As we traverse the vast expanse of the internet, let's take a moment to ponder: If you could bring any defunct website or online community back to life, which digital relic would you resurrect, and why?"`,
      `Salutations, connoisseur of the arcane and curious! In a world where magic is real, but strictly regulated, what kind of magical ability would you specialize in, and how would it reshape your daily life?`,
      `Ahoy, seeker of hidden knowledge and esoteric wisdom! If you stumbled upon a forgotten library containing secrets from lost civilizations, which piece of ancient lore would you be most eager to uncover and decipher?`,
      `Greetings, noble time traveler! The temporal gates have opened, granting you the chance to attend any past or future nerd convention. Will you be geeking out in the Renaissance era or exploring the comic cons of a futuristic cyberpunk world? And what cosplay masterpiece would you proudly wear?`,
      `Salutations, fellow explorer of virtual realms! Among the many immersive video game worlds, if you could inhabit one for a day, which would you choose? Will it be the mystical landscapes of Skyrim, the futuristic metropolis of Night City, or somewhere else entirely?`,
      `Ahoy, architect of imaginary realms! If you were tasked with designing a brand new tabletop role-playing game, what would the central theme and mechanics be, and what epic quest would players embark upon?`,
      `Greetings, time-traveling historian! You've been granted the ability to witness any historical event firsthand without altering the course of time. Which pivotal moment would you choose to observe, and what hidden details do you hope to uncover?`,
      `Salutations, guardian of the pixelated frontier! In the grand tapestry of video game sidekicks, which loyal companion or AI partner would you choose to accompany you in your real-life adventures, and how would their unique abilities enhance your day-to-day existence?`,
      `Greetings, master of the multiverse! If you could step into the shoes of any fictional character for a day, from books, movies, or TV shows, who would you become? How would you navigate their world with your newfound abilities?`,
      `Ahoy, interstellar explorer! Imagine you're joining the crew of a spaceship for a daring voyage to a distant galaxy. What role would you take on board – the ship's resident scientist, a skilled pilot, an expert diplomat, or something entirely unique?`,
      `Ah, the realm of code and algorithms! As we navigate the intricate labyrinth of software development, tell me: What's the most ingenious workaround you've devised to solve a particularly tricky programming challenge?`,
      `Greetings, virtuoso of syntax and logic! If you had the power to add a single feature or improvement to your favorite programming language, what would it be, and how would it revolutionize your coding experience?`,
      `Salutations, architect of digital wonders! In the grand spectrum of software projects, from microservices to monoliths, which type of architecture resonates most with you, and why do you find it the most elegant solution?`,
      `Greetings, debugger extraordinaire! We've all encountered those elusive bugs that seem to taunt our troubleshooting skills. Can you share a tale of a bug that kept you up at night, only to be triumphantly squashed in the end?`,
      `Ahoy, compiler whisperer! If you could magically optimize the runtime of any piece of software, be it a popular app or a widely-used library, which one would you choose, and how would your optimization impact its performance?`,
      `Salutations, code archaeologist! Imagine you're tasked with deciphering an ancient software project from a bygone era. What obsolete technologies, frameworks, or coding practices do you hope to encounter, and how would you unravel their mysteries?`,
      `Greetings, software sage! The tech landscape is ever-evolving. If you could predict the next major paradigm shift in software development, what would it be, and how would you prepare yourself for the imminent transformation?`,
      `Ahoy, captain of version control! We've all had our fair share of 'Git gone wrong' moments. Can you share a humorous or cautionary tale of a version control mishap that taught you a valuable lesson?`,
      `Greetings, agile aficionado! As the agile methodology continues to shape the software industry, what's your favorite retrospective activity or team-building exercise that you've found particularly effective in fostering collaboration and growth?`,
      `Salutations, algorithm maestro! Imagine you're competing in a coding competition with a twist – you're only allowed to use one algorithmic technique for all challenges. Which technique would you choose, and how would you adapt it to conquer various problem domains?`,
    ];
    const questionBulk = [];
    for (const q of questions) {
      const question = {
        text: q,
      } as Question;
      questionBulk.push(question);
    }
    return await this.questionRepository.save(questionBulk);
  }
}

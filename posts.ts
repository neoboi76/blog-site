import { Prisma } from "./src/generated/prisma/client";

export type Post = {
    id: string,
    title: string,
    slug: string,
    content: Prisma.JsonValue,
    published: Boolean,
    publishedAt?: Date,
    createdAt: Date,
    UpdatedAt: Date
}

export const posts: Post[] = [
    {
        id: "1",
        title: "Into the Night",
        slug: "into-the-night",
        content: [
          {
                    "type": "paragraph",
                    "content": "It was towards the end of October. Rushing through the exit at around 4:30PM, I left my university to belatedly enmesh myself in the midst of the growing mass of commuters, all caught up in the rush hour. The pavement showed signs of a recent shower, while the wind rushed aggressively against me as I made my way through the barren streets. Pockets of students here and there all made their way towards the front of a Shell gas station, where they impatiently waited for packed jeepneys to squeeze themselves in. The scent in the air oddly reminded me of a scene after an April rain, all the while the broad cloudless yellow sky, beyond the towering skyscrapers, was gradually being consumed by the incoming twilight. Night was on its way."
          },
          {
                    "type": "paragraph",
                    "content": "After about 5 minutes of waiting, I managed to catch a semi-empty jeepney, and then a few moments later, I would be squeezed in with all the other students, all heading towards the train station, and from there, God knows where. While it was damp and cold outside, it was stuffy and nauseating in the jeepney. Students, blue-collar workers, and your average Joe's, bodies compressed and interlinked, forced to bear the inequities of public transportation. As the jeepney reached the station around 5, we all alighted in the middle of the road and, like mad tribesmen, played Patintero with the oncoming traffic, trying to avoid getting hit, as we ran for the station. Rank and file, we went up through the sidewalk, then up the stairs, then through the train security, and then finally through the turnstiles, positioning ourselves next to the rails, eagerly waiting for a train. As with the jeepneys, the train cars were tightly packed, and so we had to squeeze ourselves inside; all the while, passengers were groaning and complaining about the increasing aggression with which we, the new passengers, forced ourselves inside."
          },
          {
                    "type": "paragraph",
                    "content": "For almost 30 minutes, I lay compressed in the middle of my car, waiting for my station. Ennui was killing me. Eventually, several others and I alighted at Monumento station at around 5:30 and made our way through the turnstiles and then through the exit. Attached to the station is the SM Grand Central, gradually coming to life as its lights shine through the darkening sky. Twilight was nearing its end, about to be swallowed by the night. Among the commuters, I rushed along the passageway that led down to the main front entrance of the mall, and while waltzing my way through, odors, sounds, and a chaos of light barraged me from all directions. Jeepney horns, whistles, the movement of the mass, the roars of motorcycles, and the cry of small children all coalesced and formed the busy and indifferent mass below. As I made my way to the entrance, I stood in front, waiting yet again for a jeepney. After 10 minutes, I managed to squeeze myself inside a bigger-than-usual jeepney, while the driver was shouting to give space to the newly arrived. The lights inside the jeepney were turned on to a neon purple, changing colors intermittently, from purple to green, red, blue, yellow, and back to purple, illuminating the faces of the passengers around me."
          },
          {
                    "type": "paragraph",
                    "content": "As the jeepney moved into the Monumento Circle, a series of sounds, images, and thoughts all surrounded me, weaving together a strange symphony of erratic scenes. My thoughts focused on one trivial thought to the next, semi-alert, as is always the case when one is commuting. The jeepney was circling the monument, trying to get to McArthur Highway, while aggressively warding off the jumpscares of unsuspected motorcycles, all sneaking in between the cracks. The whole scene was both absurd and beautiful, a seeming chaos given form and purpose, all heading to a definite place, all heading for the highway. When the jeepney made it to McArthur Highway, where the road was wider, it immediately accelerated forward. This acceleration produced a cacophony of sounds and images of individual elements that can be discerned only if the jeepney slowed or stopped, but was rendered as one coherent sound through its advance. Every sound and image sank into a gigantic and oppressive throng of a world that begged to be left alone. Along with this was the dancing, the slow undulation of all the colors around, swirling before me and consuming me within its gradient spiral, producing itself as the very animation of humanity's violent flight from dusk. As if to ward off the advance of the night, every structure and entity produced its own light, casting the world around it in an uncanny chiaroscuro. Jeepneys, casinos, bars, and restaurants stood with their gigantic signs and neon lights, in the hopes of attracting the swarm of consumers, all enthralled before the sheen of the night."
          },
          {
                    "type": "paragraph",
                    "content": "Further down the road, I couldn't shake off the feeling that we were being chased by the night. The night that emerges from the death of twilight, as the coming of dusk, this darkness that rages onwards, sucks up all light behind us, treading the same path we rode. It is a darkness from which no light can escape, a darkness that slowly swallows up a city. All the buildings, cars, people, all the colors, sounds, and odors, were gradually being consumed by this darkness out of our view, and it is now coming up on the jeepney. Suddenly, the passengers before me were being transfigured, turning black, taking on amorphous shapes with gaping, empty mouths. One of these \"things\" decides to utter a horrible cry to the driver, who by then was already up to the neck by the dark. Another scowled and produced unintelligible sounds with their gaping mouths, all accompanied by equally unintelligible and violent gestures. One by one, these monsters in the jeepney all alighted, until it was I who was left. Soon, even the light inside the jeepney was consumed; the neon lights that erratically shone and moved during acceleration were now robbed of their luminosity and slowly eaten up by the dark. Sitting, I feel the dark now creep onto my foot, now my legs, now my thighs, now my abdomen, and eventually my neck. It was eating me up. Before being consumed by the dark, I realized gradually that this night, this empty nothing, is me. This night of the world is a world of my own making, a world of my mind, a world painted in black. For the world is my dream. In its pure simplicity, the night contains everything and nothing, empty and full. Before it, I surrendered and gave myself up to its clawed embrace. For I am this night, and the night of the world is I, and now I return to this world as I am painted black on black as the jeepney gradually disappears into the night."
          }
],
        published: true,
        publishedAt: new Date("2026-08-18T10:00:00Z"),
        createdAt: new Date("2026-08-17T14:22:00Z"),
        UpdatedAt: new Date("2026-08-18T09:45:00Z"),
    },
    
    {
        id: "2",
        title: "Salvation",
        slug: "salvation",
        content: [
          {
                    "type": "paragraph",
                    "content": "The world is my dream. Every event and character that takes shape unfolds in the world of my own making. Thereby, every happiness that I seldom experience in fleeting moments and every sorrow that I endure on a daily basis are all part of the same illusion, of the same dream that seems unending. Taking a walk in the streets, on the campus, through the hallways, or right past the lobby, the cacophony of noises that leaks through in each and every room, noises emanating from a mass of beings separate from myself, are but the noises made by phantoms in the drama of my dream. Consequently, all my suffering, all the inconvenience I’ve had to endure for so long, has finally and once and for all been shown to be the machinations of an unending nightmare. How might one survive this hell? Can I survive this hell? It is easy. I have only to open my blind eyes and focus the hearing of my deaf ears, in order to recognize the unreality of this world. For all shapes that take hold of my consciousness, all emotions provoked in me, and all characters that oppress me, can never truly harm me, but can only frighten me, as one is temporarily frightened in a violent nightmare, and then realizes after waking that none of it ever happened. I can never be harmed in this world, only distressed. Therefore, true salvation is to recognize this dream for what it really is: an illusion and nothing else. To treat with suspicion the machinations of this dream world. To soberly arrest myself from the seductions of phenomena. In such a way, I can never be distressed, can be delivered from suffering, while I remain in my quiet and temporary existence in this dream. The world is a dream, and I must wake up from it as soon as possible. To recognize this world as pure illusion is to save oneself from the hell of other people."
          }
],
        published: true,
        publishedAt: new Date("2026-08-18T10:00:00Z"),
        createdAt: new Date("2026-08-17T14:22:00Z"),
        UpdatedAt: new Date("2026-08-18T09:45:00Z"),
    },

    {
        id: "3",
        title: "A Pallid Night",
        slug: "a-pallid-night",
        content: [
          {
                    "type": "paragraph",
                    "content": "Into this night I am thrown, this empty, hollow night, where all values and aspirations come to die. Where everything new and sacred, profane and old, all share the same fate. How come this pallid night? This pale darkness that consumes me, this muddy swamp, this ingracious race! How come I've washed up on the shores of this never-ending night, when I used to bask under the blaze of the noble sun? Whither did that noon go? To whom does it still share its rays, and how many has it abandoned? Oh, woe to those who are caught in the grips of this boring night. Woe to them who have lost their way, have lost their noon."
          },
          {
                    "type": "paragraph",
                    "content": "I walk aimlessly within the shadows of edifices consumed by the darkness of the night. Large, stupefying structures that formerly put one in awe, now they are nothing more than the shepherds of the souls of the night, guiding the way to nowhere. Thus, I walked this night and met shades along the way, who talk the talk of the night, the talk of the shades, who would rather pretend that they have no shadow when they are all but hollow, empty creatures, unable to be, unable to truly speak. Thus, I walk this pallid night. For hours, I searched long and hard for the sun. I walked towards the horizon, where the sun seemed to rise and set every day, at least where I think the horizon ought to be. This world, no matter where you go, is grey, whether you go up to the highest of mountains or the deepest of caves. Deep within the deepest of the world's caves, or at the highest of summits, one is consumed by this pale darkness."
          },
          {
                    "type": "paragraph",
                    "content": "For years, I labored under the illusion that the dawn would come to deliver me from this ineradicable night. Years pass, and the more I stayed in this world, the more I came to see my illusions as illusions, as mere comforts within this world of shadows. Gradually, I no longer held out the hope of the homecoming of the sun, but have accustomed myself to sight within the night, to the talk befitting shadows of the night, and to a world that no longer longs for anything outside or beyond itself. To a world that no longer dreams and suffers, but rather is held under the sway of the darkness, enamored by its comfort, its certainty, and its security. To a world that no longer produces but assures itself of what has already been produced, to what is already here and there, to what is in each case everywhere and nowhere. Such was the pallid night that is my world."
          },
          {
                    "type": "paragraph",
                    "content": "My soul lies in this prison, under the sway of the night. I long to perish with it and let the night be my last sight before my demise. For the darkness I've grown to endure, and the shadows I've cultivated superficial relations with, such a life has, after all, been not that horrid and terrible, but somehow bearable. Thus, my soul sinks deeper into this night. Then, one curious night, a terrible storm took hold of this world. Winds blown by titan-like forces, I feel that this is the end of this world of emptiness. Rains pour to no end for months, winds stay constant in their ceaseless attempt to eradicate the shadows of this world, and terrible thunder struck, and its fury reached the very chambers of our souls. Suddenly, in brief, successive flashes, lightning struck, and I was in awe. Brief explosions of light that illuminated this eternal night, brief flashes of brilliance shown before my eyes, as my hope for the end is rejuvenated. Suddenly, I stand beneath the storm and shout at the chaotic symphony that is ripping this pallid night asunder. Shouted noises at the top of my dying breath, for I have lost my words and my speech, but the cadence and groan of my voice still reveal a world long lost to the night. I long for the coming of the dawn, and the lightnings that taunted me are my star."
          },
          {
                    "type": "paragraph",
                    "content": "Somehow the storms subsided, and we were plunged into months more of darkness. But then, within the shores of this grim sea, towards the horizon, dawn would seem to rise up. It is on its way, its cheeks blushing, turning the once dark and endless waves of the sea into a dark wine; its waves now seem all the more terrible and great. The world, by this small and gradual illumination, suddenly now came to view to me, as the world I lost now came to find me once more. As the sun struggled to get itself out of its cage, the horizon slowly animated, and the world gained color, and shadows became flesh, and the world was with distinction. I find in this daybreak not the resignation of that pallid night, but of a sacred duty, to say \"yes\", to aim and shoot for lands unknown, for dreams not yet lived and seas not yet traversed. For values not yet created, for world and people not yet seen. For this homecoming of dawn is the homecoming of this sacred race, and its signpost to shoot once more beyond itself. Whatever happens then, remains a mystery to me; however, as I lay flat in the sands of this shore, awaiting the sun that I will never see, but with my bated breath, I slowly dreamt up of the people under the sway of dawn, as I lay staring at the dawn creeping up on the sleepy horizon."
          }
],
        published: true,
        publishedAt: new Date("2026-08-18T10:00:00Z"),
        createdAt: new Date("2026-08-17T14:22:00Z"),
        UpdatedAt: new Date("2026-08-18T09:45:00Z"),
    }
]
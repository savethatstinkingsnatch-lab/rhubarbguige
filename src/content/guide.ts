export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "safety"; text: string };

export type Section = {
  id: string;
  title: string;
  free: boolean;
  blocks: Block[];
};

export const GUIDE_TITLE = "Volume 5: Rhubarb";

export const sections: Section[] = [
  {
    id: "overview",
    title: "1. Quick Overview",
    free: true,
    blocks: [
      {
        type: "p",
        text: "Rhubarb is a cool-season perennial. Perennial means it comes back every spring from the same root, instead of dying after one season. The knobby base where the buds and roots meet is called the crown.",
      },
      { type: "p", text: "You eat only the stalks. The big leaf blades, and the roots, are not food." },
      {
        type: "safety",
        text: "Rhubarb leaves and roots are poisonous to people, pets, and livestock. They contain high levels of oxalic acid. Cut the leaves off at harvest and throw them in the trash or a compost pile. Never cook them, dry them, or feed them to animals.",
      },
      { type: "h3", text: "What to expect from seed" },
      {
        type: "ul",
        items: [
          "**Year 1:** leaves only. Harvest nothing.",
          "**Year 2:** a small taste, and only if the plant looks strong.",
          "**Year 3 and after:** a real spring harvest for about 8 to 10 weeks.",
          "A happy plant can live **10 to 20 years**. One mature plant is enough for most households, about **2 to 5 pounds** of stalks each spring.",
        ],
      },
      {
        type: "p",
        text: "Many gardeners skip seed and plant a piece of crown instead, because that plant matches its parent and is ready a bit sooner. This guide still shows the full seed path, and a simpler backup at the end.",
      },
      {
        type: "p",
        text: "A common mistake is judging ripeness by color. Some varieties are red. Some, including the easy seed variety **Victoria**, are mostly green with a pink blush. Green stalks are not unripe. Thick and firm matters more than red.",
      },
      { type: "tip", text: "Put the plant where it can stay. Rhubarb does not want to be moved every year." },
    ],
  },
  {
    id: "climate",
    title: "2. Climate & Best Growing Zones",
    free: false,
    blocks: [
      {
        type: "p",
        text: "Rhubarb is a cool-season plant, not a warm-season one like tomatoes or peppers. It likes mild springs, dislikes hot summers, and needs a real winter rest. To wake up strongly in spring, it wants a long spell of cold, with temperatures often below 40°F.",
      },
      {
        type: "p",
        text: "**Best USDA zones: 3 through 8.** Zone 4 to 7 is the sweet spot. Zone 3 is worth trying. Zone 8 can work with extra shade and care. Zones 9 to 11 are a struggle.",
      },
      {
        type: "p",
        text: "**Frost tolerance:** Established plants are very cold-hardy. Winter cold is a friend, not a problem, in zones 3 to 7. Young seedlings that have been slowly used to outdoor weather can take a light frost. A sudden hard freeze can still hurt brand-new transplants, so keep a sheet or an overturned pot handy that first week.",
      },
      { type: "h3", text: "When to plant" },
      { type: "p", text: "**Spring (the best window for beginners)**" },
      {
        type: "ul",
        items: [
          "Start seeds indoors **6 to 8 weeks before your last spring frost**.",
          "Or sow seeds outdoors **2 to 3 weeks before your last frost**, once the soil can be worked and is not soggy.",
          "Move indoor seedlings outside around the last frost date, after a week of hardening off. Hardening off means setting them outside a little longer each day so sun and wind do not shock them.",
        ],
      },
      { type: "p", text: "**Fall (optional, and not for every climate)**" },
      {
        type: "ul",
        items: [
          "In zones 3 to 5, do not count on fall-sown seed. Tiny plants can be pushed out of the soil as it freezes and thaws.",
          "In zones 6 to 8, early fall is a good time to plant **crowns** (root pieces), about 4 to 6 weeks before the ground freezes. Seed is still easier in spring.",
          "Get seed-grown plants into the garden by early summer so they can grow a strong crown before winter.",
        ],
      },
      {
        type: "p",
        text: "**Succession planting:** Skip it. Succession means sowing a short row every couple of weeks, the way you do with lettuce. Rhubarb is planted once and harvested each spring for years. Two or three plants is plenty.",
      },
      { type: "h3", text: "Where rhubarb struggles" },
      {
        type: "ul",
        items: [
          "**Zones 9 to 11, and hot inland summers:** Winters never stay cold long enough for a good rest. Heat makes stalks thin, and plants fade.",
          "**Hot, sticky summers with poor drainage:** Crowns rot in warm, wet soil.",
          "**The coldest edges of zone 2 to 3,** if winter wind hits bare ground with no snow: crowns can freeze dry. Snow, or mulch put on after the soil freezes, helps.",
        ],
      },
      { type: "h3", text: "Simple workarounds for marginal zones" },
      {
        type: "ul",
        items: [
          "**Zones 7 to 8:** Morning sun and afternoon shade. Mulch, and water during hot spells. Choose soil that drains.",
          "**Zones 9 and warmer (optional experiment):** Grow it like a cool-season annual. Sow in fall or late winter, take a small spring harvest, and let the plant finish when hard heat arrives. Or grow one plant in a pot at least 20 inches wide and deep that you can roll into shade.",
          "If plants die every summer, stop replanting them in the same hole.",
        ],
      },
      {
        type: "tip",
        text: "Look up two dates before you buy seed: your USDA zone and your average last spring frost. Those two numbers run the whole guide.",
      },
    ],
  },
  {
    id: "planting",
    title: "3. Planting Guide (Seed to Seedling)",
    free: false,
    blocks: [
      {
        type: "p",
        text: "Choose an open-pollinated seed if you can. **Victoria** is the classic beginner variety. Named red varieties sold as crowns may not match the parent if you later save their seed.",
      },
      { type: "h3", text: "Soil, light, and spacing" },
      {
        type: "p",
        text: "Rhubarb wants rich, loose soil that drains. If a puddle sits for hours after rain, pick a higher spot or a raised bed. Aim for a soil pH around 6.0 to 6.8. If you have never tested soil, mixing in compost is still the right first step.",
      },
      {
        type: "ul",
        items: [
          "**Sun:** At least 6 hours in cool climates. In zones 7 to 8, afternoon shade is better.",
          "**Spacing:** **3 to 4 feet apart** in every direction. Rows, if you plant more than one, can be 4 to 5 feet apart.",
          "**Depth:** Seeds go **1/2 to 1 inch** deep. When you transplant, the growing point stays at the soil surface. Do not bury the crown.",
        ],
      },
      {
        type: "p",
        text: "A common mistake is spacing rhubarb like lettuce. Crowded plants stay small, stay wet, and rot.",
      },
      { type: "h3", text: "Start seeds indoors (best in zones 3 to 6)" },
      {
        type: "ol",
        items: [
          "**6 to 8 weeks before your last frost,** fill 3- to 4-inch pots with damp seed-starting mix. Do not use heavy garden soil in pots.",
          "Soak the seeds in room-temperature water for a few hours. This is optional, but it helps.",
          "Plant 2 seeds per pot, **1/2 to 1 inch deep**. Press the mix so the seed touches damp soil.",
          "Keep the mix moist, not soggy. A warm spot around **60 to 75°F** is ideal. Sprouts usually show in **7 to 21 days**. Heat above 80°F can slow them down.",
          "Put seedlings in a bright window or under a grow light for 12 to 14 hours a day.",
          "When both seeds sprout, snip the weaker one at the soil line. Do not pull it.",
          "About **7 to 10 days before planting out,** harden them off. Start with 1 hour outside in shade, then add time each day.",
        ],
      },
      { type: "h3", text: "Or sow outdoors" },
      {
        type: "ol",
        items: [
          "**2 to 3 weeks before your last frost,** loosen the top 8 to 12 inches of soil. Mix in 2 to 3 inches of compost.",
          "Plant seeds 1/2 to 1 inch deep in groups of 2 or 3, with groups 3 to 4 feet apart.",
          "Water gently so you do not uncover the seeds.",
          "When seedlings have 2 true leaves, cut the extras and leave the strongest plant in each group.",
        ],
      },
      {
        type: "p",
        text: "Outdoor sowing is fine in zones 6 to 8. In short-spring climates, indoor starts give you a sturdier plant before summer heat.",
      },
      { type: "h3", text: "Transplant into the garden" },
      {
        type: "ol",
        items: [
          "Plant out around your last frost date. A light frost is usually fine after hardening off.",
          "Set the seedling so the crown sits level with the soil, not in a buried cup.",
          "Water slowly until the root zone is moist, and label the spot.",
          "Lay 2 to 3 inches of straw or shredded leaves around the plant. Keep mulch a few inches off the crown so it does not rot.",
        ],
      },
      { type: "tip", text: "Two seeds in a pot are enough. A whole packet in one hole becomes a tangle you cannot save." },
    ],
  },
  {
    id: "care",
    title: "4. Growing & Care",
    free: false,
    blocks: [
      {
        type: "p",
        text: "The first year is about roots, not food. Leaves are the plant’s solar panels. Every stalk you pull in year 1 is energy stolen from next spring.",
      },
      { type: "h3", text: "Water" },
      {
        type: "p",
        text: "Give about **1 inch of water a week**, from rain or the hose, through the first summer. Water the soil, not the leaves. Soak deeply, then let the top dry slightly. Daily sprinkles keep the crown wet and the roots shallow.",
      },
      { type: "p", text: "In the heat of zones 7 and 8, check twice a week. A plant in a pot dries faster than a plant in the ground." },
      { type: "h3", text: "Feed" },
      {
        type: "p",
        text: "In early spring, when shoots appear, spread **1 to 2 inches of compost** around the plant. Keep it off the crown. That is enough for many gardens.",
      },
      {
        type: "p",
        text: "If growth looks pale, you can add a light dose of balanced vegetable fertilizer once in early spring, following the box. Do not pile fertilizer into the center of the plant. Extra nitrogen makes soft, floppy growth. Stop fussing by midsummer.",
      },
      { type: "h3", text: "Sun and summer care" },
      {
        type: "ul",
        items: [
          "Keep weeds down. A full-grown rhubarb shades out a lot of them on its own.",
          "If a thick flower stalk shoots up, cut it off at the base **unless** you are saving seed that year. Flowering does **not** make the stalks poisonous. Leaves are always the dangerous part.",
          "After a hard freeze kills the leaves, you can remove the dead leaves. In zones 3 to 4, after the ground freezes, a loose mulch over the crown can help. Pull that mulch back in early spring.",
        ],
      },
      { type: "h3", text: "Thinning and transplanting later" },
      {
        type: "p",
        text: "You already thinned seedlings to one plant per spot. If a plant must move, do it in **early spring**, just as shoots emerge, or in **early fall** in milder zones. Dig wide so you keep roots. Water it in, and do not harvest that year.",
      },
      { type: "h3", text: "Pests and diseases" },
      {
        type: "ul",
        items: [
          "**Slugs on new plants:** Pick them at dusk. Set the mulch back from the crown. A shallow dish of beer, rim at soil level, traps many of them.",
          "**Aphids:** Blast them off with water. If they return, insecticidal soap labeled for vegetables is enough.",
          "**Rhubarb curculio** (a snout beetle that punctures stalks), in some eastern and central regions: It also lives on dock weeds. Pull dock near the garden. Discard badly bored stalks.",
          "**Leaf spots:** Remove the worst leaves. Water the soil, not the foliage.",
          "**Crown rot:** The center turns mushy and the plant collapses. This comes from wet soil or a buried crown. Dig the plant out and do not put rhubarb back in that soggy spot.",
        ],
      },
      { type: "h3", text: "A perennial does not need succession sowing" },
      {
        type: "ul",
        items: [
          "Let one plant reach full harvest age before you divide it.",
          "If you want a backup, start a second plant a year later.",
          "Harvest the same plant over **8 to 10 weeks** in spring, a few stalks at a time.",
        ],
      },
      {
        type: "tip",
        text: "If you remember only one care rule, make it this: no harvest in the first year.",
      },
    ],
  },
  {
    id: "harvest",
    title: "5. Harvesting Properly",
    free: false,
    blocks: [
      { type: "p", text: "Wait. Seed-grown rhubarb needs time." },
      {
        type: "ul",
        items: [
          "**Year 1:** harvest nothing, even if the stalks look tall.",
          "**Year 2:** if the plant is sturdy, take a light taste for 1 to 2 weeks. About 4 to 8 stalks for the whole season is plenty.",
          "**Year 3 and after:** harvest for **8 to 10 weeks** in spring. Stop the main harvest by early summer so the plant can refuel.",
        ],
      },
      {
        type: "p",
        text: "A later stalk or two will not ruin a mature plant. Those stalks are often tougher. They are not suddenly poisonous. The “it turns toxic in July” story is a myth. The **leaves** are what you must never eat, in every month.",
      },
      { type: "h3", text: "Signs a stalk is ready" },
      {
        type: "ul",
        items: [
          "Length is usually **10 to 15 inches**.",
          "Thickness is about **3/4 inch or more** at the base. Pencil-thin stalks are a stop sign.",
          "The stalk feels **firm and glossy**. A good one snaps more than it flops.",
          "Color may be red, speckled, or mostly green. **Green is fine** on green varieties.",
        ],
      },
      { type: "h3", text: "Best time of day" },
      {
        type: "p",
        text: "Pick in the **morning**, after the dew has dried and before the day heats up. Stalks are crisp then. Dry stalks also store longer than wet ones.",
      },
      { type: "h3", text: "How to pick without hurting the plant" },
      {
        type: "ol",
        items: [
          "Choose a thick, ready stalk.",
          "Slide your hand down near the base. Grip the stalk, not the leaf.",
          "Pull outward and slightly to the side with a gentle twist. The stalk should pop free at the crown.",
          "**Immediately cut off the whole leaf blade.** Keep leaves out of the kitchen.",
          "Leave **at least half, and ideally two-thirds,** of the stalks on the plant. Never strip it bare.",
          "If a stub will not pull cleanly, cut it close to the base without slicing the crown. Do not leave a long stub. Stubs rot.",
        ],
      },
      { type: "h3", text: "What a beginner can expect" },
      {
        type: "ul",
        items: [
          "Year 2: a handful of stalks, maybe under a pound.",
          "Year 3: about **2 to 5 pounds** from one healthy plant.",
          "One plant still feeds most families. Four plants will bury you in stalks unless you plan to freeze them.",
        ],
      },
      {
        type: "tip",
        text: "Drop the leaves in the compost or trash before you walk inside. If the leaf never reaches the counter, nobody can mistake it for food.",
      },
    ],
  },
  {
    id: "storage",
    title: "6. Storage Methods",
    free: false,
    blocks: [
      {
        type: "p",
        text: "Use only clean, firm stalks. Trim off every bit of leaf. For the fridge, wash on cooking day. Wet stalks spoil faster.",
      },
      {
        type: "safety",
        text: "Never eat, cook, can, dry, or freeze the leaves or roots. Do not feed leaves to pets, chickens, or livestock. Throw out stalks that are slimy, moldy, or smell sour. If a canned jar is unsealed, leaking, bulging, or spurts when opened, do not taste it. Throw it out where pets and children cannot reach it. The canning steps below are only for tested plain stewed rhubarb. Do not add extra fruit or vegetables and then can it. Flavored recipes are for the fridge or freezer only.",
      },
      { type: "h3", text: "Short-term fridge" },
      {
        type: "ol",
        items: [
          "Leave stalks whole and unwashed.",
          "Put them in a loose bag in the crisper drawer.",
          "Use within **1 to 2 weeks**, up to about 3 if they stay firm.",
          "If they bend limply, cook them that day. If they slime or mold, throw them out.",
        ],
      },
      { type: "h3", text: "Freezing" },
      {
        type: "p",
        text: "A short blanch holds color and flavor best. You may also freeze raw pieces for cooked recipes. Both are safe. Blanching is the better-quality choice.",
      },
      {
        type: "ol",
        items: [
          "Wash, trim, and cut stalks into **1-inch pieces**.",
          "Boil the pieces for **1 minute**.",
          "Cool them fast in ice water for about 1 minute. Drain well.",
          "Tray-freeze in one layer, then pack into freezer bags. Press out the air.",
          "In a rigid container, leave about **1/2 inch** of headspace. Headspace is the empty gap under the lid.",
          "Label the date. Keep the freezer at **0°F**. Best quality is about **10 to 12 months**.",
        ],
      },
      {
        type: "p",
        text: "Raw pack, if you skip blanching: wash, dry, cut, tray-freeze, and bag. Frozen rhubarb can go into crisps and sauce without thawing. If a batter must stay thick, thaw it in a strainer and pat it dry first. Cooked sauce can be frozen in portions for up to 12 months.",
      },
      { type: "h3", text: "Canning (boiling-water bath only)" },
      {
        type: "p",
        text: "Plain rhubarb is acidic enough for a **boiling-water canner**. You do not need a pressure canner for this one recipe. If you have never canned, read a boiling-water basics guide from the National Center for Home Food Preservation or your state extension first.",
      },
      {
        type: "ol",
        items: [
          "Trim off all leaves. Wash and cut into 1/2- to 1-inch pieces.",
          "For each **quart (4 cups)** of cut rhubarb, add **1/2 cup sugar**.",
          "Let it stand until juice appears. Heat gently just to boiling.",
          "Pack the hot fruit and juice into hot pint or quart jars. Leave **1/2 inch headspace**.",
          "Remove air bubbles, wipe the rims, and put on lids fingertip tight.",
          "Process in a boiling-water canner, jars covered by 1 to 2 inches of water. Start timing at a full rolling boil.",
        ],
      },
      {
        type: "ul",
        items: [
          "**0 to 1,000 feet:** 15 minutes",
          "**1,001 to 6,000 feet:** 20 minutes",
          "**Above 6,000 feet:** 25 minutes",
        ],
      },
      {
        type: "p",
        text: "Turn off the heat, remove the lid, and wait 5 minutes before lifting jars out. Cool 12 to 24 hours. A sealed lid does not flex. Refrigerate any unsealed jar and eat it within a few days. Store sealed jars in a cool, dark pantry and use within about **1 year** for best quality.",
      },
      {
        type: "p",
        text: "Do not swap honey or extra low-acid fruit into this recipe. Pressure canning is optional only if you follow the current USDA time and pressure for stewed rhubarb. If you cannot find that table, use the boiling-water method above.",
      },
      { type: "h3", text: "Root cellar, cool storage, and pantry" },
      {
        type: "ul",
        items: [
          "**Fresh stalks do not belong in a root cellar or on a pantry shelf.** They wilt and mold.",
          "**Canned stewed rhubarb** and **dried slices** are the pantry options.",
          "To dry (optional): cut into 1-inch pieces, steam-blanch 1 to 2 minutes or dry them raw, until tough to crisp. Store airtight in a dark cupboard. Simmer in a little water to soften. If the jar smells off or shows moisture, throw it out.",
          "Crowns for **replanting**, not for eating, can sit a few days around 32 to 40°F, wrapped in slightly damp newspaper. That is planting material, not dinner.",
        ],
      },
      {
        type: "tip",
        text: "Freeze the extra the same day you pick it. Rhubarb in the fridge is a two-week food. Rhubarb in the freezer is a winter pie.",
      },
    ],
  },
  {
    id: "recipes",
    title: "7. Simple Recipes",
    free: false,
    blocks: [
      {
        type: "p",
        text: "These use ordinary pantry ingredients. Active time stays around 30 minutes or less. The oven or the fridge may do the rest.",
      },
      {
        type: "safety",
        text: "Every recipe uses stalks only. If a leaf is still attached, cut it off and discard it before you start. The ginger-orange compote and the refrigerator pickles are for the fridge or freezer only. Do not can them.",
      },
      { type: "h3", text: "1. Simple stewed rhubarb" },
      {
        type: "p",
        text: "The preservation-friendly one. It freezes beautifully. **Serves 4. About 20 minutes.**",
      },
      {
        type: "ul",
        items: [
          "4 cups chopped rhubarb (about 1-inch pieces)",
          "1/3 to 1/2 cup sugar",
          "2 tablespoons water if the fresh stalks look dry",
        ],
      },
      {
        type: "ol",
        items: [
          "Put everything in a saucepan. Skip the extra water if you are using frozen rhubarb.",
          "Cook over medium heat until the pieces turn saucy, about 10 to 15 minutes.",
          "Taste, cool, and pack.",
        ],
      },
      {
        type: "p",
        text: "**Fresh or frozen** both work. Canned plain rhubarb is already this sauce — just warm the jar. **Leftovers:** fridge up to 5 days, or freeze up to 12 months with 1/2 inch headspace. Do not can a pot unless you followed the tested canning steps.",
      },
      { type: "h3", text: "2. Ginger-orange rhubarb compote" },
      { type: "p", text: "**Serves 2 to 3. About 15 minutes.**" },
      {
        type: "ul",
        items: [
          "2 cups chopped rhubarb",
          "2 tablespoons sugar",
          "Juice of 1/2 orange",
          "1 teaspoon grated fresh ginger, or 1/4 teaspoon ground ginger",
        ],
      },
      {
        type: "ol",
        items: [
          "Combine everything in a small saucepan.",
          "Simmer 8 to 12 minutes, until the rhubarb slumps but a few pieces remain.",
          "Spoon it over yogurt, oatmeal, or pancakes.",
        ],
      },
      {
        type: "p",
        text: "Fresh or frozen both work. **Leftovers:** fridge up to 4 days, or freeze up to 3 months. **Do not can this version.**",
      },
      { type: "h3", text: "3. One-bowl rhubarb crisp" },
      { type: "p", text: "**Serves 6. About 15 minutes of work, plus baking.**" },
      {
        type: "ul",
        items: [
          "4 cups chopped rhubarb, 1/2 cup sugar, and 1 tablespoon flour",
          "Topping: 1/2 cup oats, 1/2 cup flour, 1/3 cup brown sugar, 1/4 cup cold butter, a pinch of salt, a pinch of cinnamon",
        ],
      },
      {
        type: "ol",
        items: [
          "Heat the oven to 375°F. Grease an 8-inch square dish.",
          "Toss the rhubarb with the sugar and the tablespoon of flour.",
          "Rub the butter into the topping until it looks like damp crumbs. Scatter it on top.",
          "Bake 35 to 45 minutes, until the fruit bubbles. Frozen rhubarb can go in still frozen; add 5 to 10 minutes.",
          "Let it sit 15 minutes before serving.",
        ],
      },
      {
        type: "p",
        text: "Best with fresh or frozen pieces. Do not build a crisp from canned stewed rhubarb. **Leftovers:** fridge up to 3 days. Baked crisp can be frozen up to 2 months, but the topping softens.",
      },
      { type: "h3", text: "4. Bright rhubarb lemonade" },
      { type: "p", text: "**Serves 6. About 20 minutes, plus chilling.**" },
      {
        type: "ul",
        items: [
          "4 cups chopped rhubarb",
          "4 cups water",
          "1/2 to 3/4 cup sugar",
          "1/4 cup lemon juice",
        ],
      },
      {
        type: "ol",
        items: [
          "Simmer the rhubarb and water about 15 minutes, until the stalks fall apart.",
          "Strain. Press gently. Discard the pulp or stir it into yogurt.",
          "Stir in the sugar while the juice is warm, then add the lemon juice.",
          "Chill and serve over ice.",
        ],
      },
      {
        type: "p",
        text: "Use fresh or frozen stalks, not canned sweetened rhubarb. **Leftovers:** fridge up to 5 days, or freeze as ice cubes for cold drinks.",
      },
      { type: "h3", text: "5. Small-batch rhubarb muffins" },
      { type: "p", text: "**Makes 12. About 20 minutes of work, plus baking.**" },
      {
        type: "ul",
        items: [
          "1 1/2 cups flour, 1/2 cup sugar plus 1 tablespoon for the tops, 2 teaspoons baking powder, 1/2 teaspoon salt, 1/2 teaspoon cinnamon",
          "1 egg, 1/2 cup milk, 1/4 cup oil or melted butter, 1 teaspoon vanilla",
          "1 cup small-chopped rhubarb",
        ],
      },
      {
        type: "ol",
        items: [
          "Heat the oven to 350°F. Line a 12-cup muffin tin.",
          "Stir the dry ingredients. Stir the wet ingredients in another bowl.",
          "Combine just until the flour disappears. Fold in the rhubarb. If it is frozen, thaw, drain, and pat dry first.",
          "Fill the cups about two-thirds full. Sprinkle the extra sugar on top.",
          "Bake 18 to 22 minutes. Cool 10 minutes.",
        ],
      },
      {
        type: "p",
        text: "Skip canned rhubarb here. It is too wet. **Leftovers:** 1 day covered on the counter, 3 days in the fridge, or freeze up to 2 months.",
      },
      { type: "h3", text: "6. Quick refrigerator rhubarb" },
      {
        type: "p",
        text: "Crunchy and tart, for salads or a cheese plate. **This is a fridge pickle only. Fills one pint jar. About 15 minutes, plus a day of waiting.**",
      },
      {
        type: "ul",
        items: [
          "2 cups thinly sliced rhubarb stalks",
          "1 cup apple cider vinegar (5% acidity), 1 cup water, 1/3 cup sugar, 1 teaspoon salt",
          "Optional: a few peppercorns or a strip of orange peel",
        ],
      },
      {
        type: "ol",
        items: [
          "Pack the rhubarb into a clean glass jar.",
          "Heat the vinegar, water, sugar, and salt until the sugar dissolves.",
          "Pour the hot brine over the rhubarb until the pieces are covered.",
          "Cool, cap, and refrigerate. Wait about 24 hours before eating.",
        ],
      },
      {
        type: "safety",
        text: "Keep these pickles in the refrigerator and eat them within 2 weeks. Do not leave this jar in the pantry. Do not process it in a canner. This brine is not a tested shelf-stable recipe. If it smells off or grows mold, throw the whole jar away without tasting it. Use fresh stalks. Frozen pieces turn soft.",
      },
      {
        type: "tip",
        text: "Make the stewed rhubarb the day you harvest. Freeze half before you decide you are tired of tart food. You will want it in January.",
      },
    ],
  },
  {
    id: "seeds",
    title: "8. Saving Seeds for Next Year",
    free: false,
    blocks: [
      {
        type: "p",
        text: "You can save rhubarb seed. For a beginner who wants the **same** plant next year, dividing the crown is the better plan. Seed-grown children vary. Some will be excellent. Some will be thin and more eager to flower. That is normal.",
      },
      { type: "h3", text: "If you still want to save seed" },
      {
        type: "p",
        text: "Do this only with an **open-pollinated** plant, such as Victoria. If the packet said **hybrid** or **F1**, the seeds will not match the parent. Many red rhubarbs sold as crowns are clones. Grow those from divisions, not from saved seed.",
      },
      {
        type: "p",
        text: "Insects pollinate the flowers. Another rhubarb variety nearby will mix in. If you have only one kind, the seed is fine for home use. The plants just will not be identical.",
      },
      {
        type: "ol",
        items: [
          "Choose the plant in spring, before you let it flower. Pick your strongest crown, with thick stalks and no rot.",
          "Wait until the plant is mature, usually year 3 or later from seed. Let **one** flower stalk stay. Cut off the extras.",
          "Let the seeds ripen on the plant, often in August or September. Ripe seeds are hard and tan to brown. If heavy rain is coming and the seeds are already brown, cut the stalk early.",
          "Cut the seed head into a paper bag. Hang the bag somewhere dry for another week.",
          "Rub the clusters between your hands. Blow gently outdoors so the papery chaff floats off. This is called winnowing.",
          "Dry the clean seed in one layer, out of hot sun, for **1 to 2 weeks**. A dry seed snaps. A damp seed bends.",
          "Store the seed in a paper envelope labeled with the variety and the date, inside a sealed jar in a cool, dark closet.",
        ],
      },
      {
        type: "p",
        text: "**Viability:** Expect good sprouting for **2 to 3 years**. After that, test 10 seeds on a damp paper towel. If only 2 or 3 sprout after 3 weeks, sow thickly or buy fresh seed.",
      },
      { type: "h3", text: "The easier path: divide the crown" },
      {
        type: "p",
        text: "This copies the exact plant you already like. Do it in **early spring**, as soon as the soil can be worked. In zones 6 to 8 you may also divide in early fall, about 4 to 6 weeks before the ground freezes.",
      },
      {
        type: "ol",
        items: [
          "Choose a healthy plant that is at least 3 or 4 years old.",
          "Dig around it and lift the whole crown.",
          "Split it so each piece has **2 or 3 buds** and a solid chunk of root.",
          "Replant the same day. Set the buds about **1 to 2 inches below** the soil, no deeper. Space pieces 3 to 4 feet apart.",
          "No harvest the next year. A light harvest the year after that. A full harvest after that.",
          "Divide a crowded plant every **5 to 8 years**.",
        ],
      },
      {
        type: "tip",
        text: "Save seed once, from your best open-pollinated plant, so you learn the whole cycle. Keep the harvest coming by dividing that same plant. Roots are the sure path. Seeds are the adventure.",
      },
    ],
  },
];

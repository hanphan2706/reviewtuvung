import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";
import { U69_COUNTABLE_AND_UNCOUNTABLE_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/countable-and-uncountable-1-exercises";
import { U69_COUNTABLE_AND_UNCOUNTABLE_1_TOPIC } from "@/lib/grammar/grammar-topic-content/countable-and-uncountable-1";
import { U70_COUNTABLE_AND_UNCOUNTABLE_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/countable-and-uncountable-2-exercises";
import { U70_COUNTABLE_AND_UNCOUNTABLE_2_TOPIC } from "@/lib/grammar/grammar-topic-content/countable-and-uncountable-2";
import { U71_COUNTABLE_NOUNS_WITH_A_AN_AND_SOME_EXERCISES } from "@/lib/grammar/grammar-topic-content/countable-nouns-with-a-an-and-some-exercises";
import { U71_COUNTABLE_NOUNS_WITH_A_AN_AND_SOME_TOPIC } from "@/lib/grammar/grammar-topic-content/countable-nouns-with-a-an-and-some";
import { U72_A_AN_AND_THE_EXERCISES } from "@/lib/grammar/grammar-topic-content/a-an-and-the-exercises";
import { U72_A_AN_AND_THE_TOPIC } from "@/lib/grammar/grammar-topic-content/a-an-and-the";
import { U73_THE_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/the-1-exercises";
import { U73_THE_1_TOPIC } from "@/lib/grammar/grammar-topic-content/the-1";
import { U74_THE_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/the-2-exercises";
import { U74_THE_2_TOPIC } from "@/lib/grammar/grammar-topic-content/the-2";
import { U75_THE_3_EXERCISES } from "@/lib/grammar/grammar-topic-content/the-3-exercises";
import { U75_THE_3_TOPIC } from "@/lib/grammar/grammar-topic-content/the-3";
import { U76_THE_4_EXERCISES } from "@/lib/grammar/grammar-topic-content/the-4-exercises";
import { U76_THE_4_TOPIC } from "@/lib/grammar/grammar-topic-content/the-4";
import { U77_NAMES_WITH_AND_WITHOUT_THE_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/names-with-and-without-the-1-exercises";
import { U77_NAMES_WITH_AND_WITHOUT_THE_1_TOPIC } from "@/lib/grammar/grammar-topic-content/names-with-and-without-the-1";
import { U78_NAMES_WITH_AND_WITHOUT_THE_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/names-with-and-without-the-2-exercises";
import { U78_NAMES_WITH_AND_WITHOUT_THE_2_TOPIC } from "@/lib/grammar/grammar-topic-content/names-with-and-without-the-2";
import { U79_SINGULAR_AND_PLURAL_EXERCISES } from "@/lib/grammar/grammar-topic-content/singular-and-plural-exercises";
import { U79_SINGULAR_AND_PLURAL_TOPIC } from "@/lib/grammar/grammar-topic-content/singular-and-plural";
import { U80_NOUN_NOUN_EXERCISES } from "@/lib/grammar/grammar-topic-content/noun-noun-exercises";
import { U80_NOUN_NOUN_TOPIC } from "@/lib/grammar/grammar-topic-content/noun-noun";
import { U81_S_AND_OF_EXERCISES } from "@/lib/grammar/grammar-topic-content/s-and-of-exercises";
import { U81_S_AND_OF_TOPIC } from "@/lib/grammar/grammar-topic-content/s-and-of";
import { U82_MYSELF_YOURSELF_THEMSELVES_ETC_EXERCISES } from "@/lib/grammar/grammar-topic-content/myself-yourself-themselves-etc-exercises";
import { U82_MYSELF_YOURSELF_THEMSELVES_ETC_TOPIC } from "@/lib/grammar/grammar-topic-content/myself-yourself-themselves-etc";
import { U83_A_FRIEND_OF_MINE_MY_OWN_ON_MY_OWN_BY_MYSELF_EXERCISES } from "@/lib/grammar/grammar-topic-content/a-friend-of-mine-my-own-on-my-own-by-myself-exercises";
import { U83_A_FRIEND_OF_MINE_MY_OWN_ON_MY_OWN_BY_MYSELF_TOPIC } from "@/lib/grammar/grammar-topic-content/a-friend-of-mine-my-own-on-my-own-by-myself";
import { U84_THERE_AND_IT_EXERCISES } from "@/lib/grammar/grammar-topic-content/there-and-it-exercises";
import { U84_THERE_AND_IT_TOPIC } from "@/lib/grammar/grammar-topic-content/there-and-it";
import { U85_SOME_AND_ANY_EXERCISES } from "@/lib/grammar/grammar-topic-content/some-and-any-exercises";
import { U85_SOME_AND_ANY_TOPIC } from "@/lib/grammar/grammar-topic-content/some-and-any";
import { U86_NO_NONE_ANY_NOTHING_NOBODY_ETC_EXERCISES } from "@/lib/grammar/grammar-topic-content/no-none-any-nothing-nobody-etc-exercises";
import { U86_NO_NONE_ANY_NOTHING_NOBODY_ETC_TOPIC } from "@/lib/grammar/grammar-topic-content/no-none-any-nothing-nobody-etc";
import { U87_MUCH_MANY_LITTLE_FEW_A_LOT_PLENTY_EXERCISES } from "@/lib/grammar/grammar-topic-content/much-many-little-few-a-lot-plenty-exercises";
import { U87_MUCH_MANY_LITTLE_FEW_A_LOT_PLENTY_TOPIC } from "@/lib/grammar/grammar-topic-content/much-many-little-few-a-lot-plenty";
import { U88_ALL_ALL_OF_MOST_MOST_OF_NO_NONE_OF_ETC_EXERCISES } from "@/lib/grammar/grammar-topic-content/all-all-of-most-most-of-no-none-of-etc-exercises";
import { U88_ALL_ALL_OF_MOST_MOST_OF_NO_NONE_OF_ETC_TOPIC } from "@/lib/grammar/grammar-topic-content/all-all-of-most-most-of-no-none-of-etc";
import { U89_BOTH_NEITHER_EITHER_EXERCISES } from "@/lib/grammar/grammar-topic-content/both-neither-either-exercises";
import { U89_BOTH_NEITHER_EITHER_TOPIC } from "@/lib/grammar/grammar-topic-content/both-neither-either";
import { U90_ALL_EVERY_WHOLE_EXERCISES } from "@/lib/grammar/grammar-topic-content/all-every-whole-exercises";
import { U90_ALL_EVERY_WHOLE_TOPIC } from "@/lib/grammar/grammar-topic-content/all-every-whole";
import { U91_EACH_AND_EVERY_EXERCISES } from "@/lib/grammar/grammar-topic-content/each-and-every-exercises";
import { U91_EACH_AND_EVERY_TOPIC } from "@/lib/grammar/grammar-topic-content/each-and-every";

/**
 * Registry gộp nội dung biên soạn cho cụm Units 69–91
 * (English Grammar in Use · Intermediate — Articles / nouns / pronouns (69–91)).
 */
export const NOUNS_ARTICLES_CURATED_DETAILS: Record<string, GrammarTopicDetail> = {
  "u69-countable-and-uncountable-1": U69_COUNTABLE_AND_UNCOUNTABLE_1_TOPIC,
  "u70-countable-and-uncountable-2": U70_COUNTABLE_AND_UNCOUNTABLE_2_TOPIC,
  "u71-countable-nouns-with-a-an-and-some": U71_COUNTABLE_NOUNS_WITH_A_AN_AND_SOME_TOPIC,
  "u72-a-an-and-the": U72_A_AN_AND_THE_TOPIC,
  "u73-the-1": U73_THE_1_TOPIC,
  "u74-the-2": U74_THE_2_TOPIC,
  "u75-the-3": U75_THE_3_TOPIC,
  "u76-the-4": U76_THE_4_TOPIC,
  "u77-names-with-and-without-the-1": U77_NAMES_WITH_AND_WITHOUT_THE_1_TOPIC,
  "u78-names-with-and-without-the-2": U78_NAMES_WITH_AND_WITHOUT_THE_2_TOPIC,
  "u79-singular-and-plural": U79_SINGULAR_AND_PLURAL_TOPIC,
  "u80-noun-noun": U80_NOUN_NOUN_TOPIC,
  "u81-s-and-of": U81_S_AND_OF_TOPIC,
  "u82-myself-yourself-themselves-etc": U82_MYSELF_YOURSELF_THEMSELVES_ETC_TOPIC,
  "u83-a-friend-of-mine-my-own-on-my-own-by-myself": U83_A_FRIEND_OF_MINE_MY_OWN_ON_MY_OWN_BY_MYSELF_TOPIC,
  "u84-there-and-it": U84_THERE_AND_IT_TOPIC,
  "u85-some-and-any": U85_SOME_AND_ANY_TOPIC,
  "u86-no-none-any-nothing-nobody-etc": U86_NO_NONE_ANY_NOTHING_NOBODY_ETC_TOPIC,
  "u87-much-many-little-few-a-lot-plenty": U87_MUCH_MANY_LITTLE_FEW_A_LOT_PLENTY_TOPIC,
  "u88-all-all-of-most-most-of-no-none-of-etc": U88_ALL_ALL_OF_MOST_MOST_OF_NO_NONE_OF_ETC_TOPIC,
  "u89-both-neither-either": U89_BOTH_NEITHER_EITHER_TOPIC,
  "u90-all-every-whole": U90_ALL_EVERY_WHOLE_TOPIC,
  "u91-each-and-every": U91_EACH_AND_EVERY_TOPIC,
};

export const NOUNS_ARTICLES_CURATED_EXERCISES: Record<string, readonly GrammarExercise[]> = {
  "u69-countable-and-uncountable-1": U69_COUNTABLE_AND_UNCOUNTABLE_1_EXERCISES,
  "u70-countable-and-uncountable-2": U70_COUNTABLE_AND_UNCOUNTABLE_2_EXERCISES,
  "u71-countable-nouns-with-a-an-and-some": U71_COUNTABLE_NOUNS_WITH_A_AN_AND_SOME_EXERCISES,
  "u72-a-an-and-the": U72_A_AN_AND_THE_EXERCISES,
  "u73-the-1": U73_THE_1_EXERCISES,
  "u74-the-2": U74_THE_2_EXERCISES,
  "u75-the-3": U75_THE_3_EXERCISES,
  "u76-the-4": U76_THE_4_EXERCISES,
  "u77-names-with-and-without-the-1": U77_NAMES_WITH_AND_WITHOUT_THE_1_EXERCISES,
  "u78-names-with-and-without-the-2": U78_NAMES_WITH_AND_WITHOUT_THE_2_EXERCISES,
  "u79-singular-and-plural": U79_SINGULAR_AND_PLURAL_EXERCISES,
  "u80-noun-noun": U80_NOUN_NOUN_EXERCISES,
  "u81-s-and-of": U81_S_AND_OF_EXERCISES,
  "u82-myself-yourself-themselves-etc": U82_MYSELF_YOURSELF_THEMSELVES_ETC_EXERCISES,
  "u83-a-friend-of-mine-my-own-on-my-own-by-myself": U83_A_FRIEND_OF_MINE_MY_OWN_ON_MY_OWN_BY_MYSELF_EXERCISES,
  "u84-there-and-it": U84_THERE_AND_IT_EXERCISES,
  "u85-some-and-any": U85_SOME_AND_ANY_EXERCISES,
  "u86-no-none-any-nothing-nobody-etc": U86_NO_NONE_ANY_NOTHING_NOBODY_ETC_EXERCISES,
  "u87-much-many-little-few-a-lot-plenty": U87_MUCH_MANY_LITTLE_FEW_A_LOT_PLENTY_EXERCISES,
  "u88-all-all-of-most-most-of-no-none-of-etc": U88_ALL_ALL_OF_MOST_MOST_OF_NO_NONE_OF_ETC_EXERCISES,
  "u89-both-neither-either": U89_BOTH_NEITHER_EITHER_EXERCISES,
  "u90-all-every-whole": U90_ALL_EVERY_WHOLE_EXERCISES,
  "u91-each-and-every": U91_EACH_AND_EVERY_EXERCISES,
};


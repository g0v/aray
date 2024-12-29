const fs = require("node:fs");
const crypto = require("node:crypto");
const schema = require("./schema.json");
const arayProjects = require("../data/scripts/aray-projects.json");

const events = [
  "g0v hackath0n | 台灣零時政府第零次動員勘亂黑客松",
  "g0v hackath1n | 台灣零時政府第壹次公地放領黑客松",
  "g0v hackath2n | 台灣零時政府第貳次九大建設黑客松",
  "g0v hackath3n | 台灣零時政府第參次客廳工廠黑客松",
  "g0v hackath4n | 台灣零時政府第肆次國民大會黑客松",
  "g0v hackath5n | 台灣零時政府第伍次美麗島黑客松",
  "g0v hackath6n | 台灣零時政府第陸次勞動基準黑客松",
  "g0v hackath7n | 台灣零時政府第柒次自由時代黑客松",
  "g0v hackath8n | 台灣零時政府第捌次解除戒嚴黑客松",
  "g0v hackath9n | 台灣零時政府第玖次還我土地黑客松",
  "g0v hackath10n | 台灣零時政府第拾次資料科學黑客松",
  "g0v hackath11n | 台灣零時政府第拾壹次開放報禁黑客松",
  "g0v hackath12n | 台灣零時政府第拾貳次不得宣傳罷免黑客松",
  "g0v hackath13n | 台灣零時政府第拾參次無殼蝸牛黑客松",
  "g0v hackath14n | 台灣零時政府第拾肆次野百合黑客松",
  "g0v hackath15n | 台灣零時政府第拾伍次資料科學黑客松",
  "g0v hackath16n | 台灣零時政府第拾陸次刑法一百黑客松",
  "g0v hackath17n | 台灣零時政府第拾柒次立委改選黑客松",
  "g0v hackath18n | 台灣零時政府第拾捌次亞太營運黑客松",
  "g0v hackath19n | 台灣零時政府第拾玖次飛彈試射黑客松",
  "g0v hackath20n | 台灣零時政府第貳拾次總統直選黑客松",
  "g0v hackath21n | 台灣零時政府第貳拾壹次根留台灣黑客松",
  "g0v hackath22n | 台灣零時政府第貳拾貳次公民科學黑客松",
  "g0v hackath23n | 台灣零時政府第貳拾參次開放資料黑客松",
  "g0v hackath24n | 台灣零時政府第貳拾肆次凍省黑客松",
  "g0v hackath25n | 台灣零時政府第貳拾伍次一綱多本黑客松",
  "g0v hackath26n | 台灣零時政府第貳拾陸次五週年黑客松",
  "g0v hackath27n | 台灣零時政府第貳拾柒次全球開放立法黑客松",
  "g0v hackath28n | 台灣零時政府第貳拾捌次高牆功德黑客松",
  "g0v hackath30n | 台灣零時政府第參拾次佛系黑客松",
  "g0v hackath31n | 台灣零時政府第參拾壹次香蕉吃到飽松",
  "g0v hackath32n | 台灣零時政府第参拾貳次蜂蜜檸檬黑客松",
  "g0v hackath33n | 台灣零時政府第參拾參次不顧北京反對___黑客松",
  "g0v hackath34n | 台灣零時政府第參拾肆次再開放空總黑客松",
  "g0v hackath35n | 台灣零時政府第參拾伍次最旁邊黑客松",
  "g0v hackath36n | 台灣零時政府第參拾陸次開放台北市議會黑客松",
  "g0v hackath37n | 台灣零時政府第參拾柒次全臺首學黑客松 + 2019 台南面海松",
  "g0v hackath38n | 台灣零時政府第參拾捌次在家黑客松",
  "g0v hackath39n | 台灣零時政府第參拾玖次又在家黑客松",
  "g0v hackath40n | 台灣零時政府第肆拾次老地方黑客松",
  "g0v hackath41n | 第肆拾壹次八週年黑客松",
  "g0v hackath42n | 第肆拾貳次黑客松",
  "g0v hackath43n | 第肆拾參次源力犇騰黑客松",
  "g0v hackath44n | 第肆拾肆次世界最危險黑客松",
  "g0v hackath45n | 第肆拾伍次原本在台中黑客松",
  "g0v hackath46n | 第肆拾陸次九週年黑客松",
  "hackath47n | 第肆拾柒次板橋油庫口黑客松",
  "hackath48n | 第肆拾捌次虎來俱進黑客松",
  "hackath49n | 第肆拾玖次全糖去冰黑客松,",
  "hackath50n | 第伍拾次來電五十黑客松",
  "hackath51n | 第伍拾壹次大肚山海豚黑客松",
  "hackath52n | 台灣零時政府第伍拾貳次十週年黑客松",
  "hackath53n | 第伍拾參次 18 歲公民權黑客松",
  "hackath54n | 第伍拾肆次兔兔黑客松",
  "hackath55n | 第伍拾伍次AI也想參加黑客松",
  "hackath56n | 第伍拾陸次真的假的黑客松 x 水保局",
  "hackath57n | 第伍拾柒次開源普渡黑客松",
  "hackath58n | 第伍拾捌次 11 歲生日快樂黑客松",
  "hackath59n | 第伍拾玖次輪班寫code救台灣黑客松",
  "hackath60n | 第陸拾次記得投票黑客松",
  "hackath61n | 第陸拾壹次龍來 Open Data Day 黑客松",
  "hackath62n | 第陸拾貳次帶我去月球黑客松",
  "hackath63n | 第陸拾參次公民科技園遊會黑客松",
  "hackath64n | 第陸拾肆次黃金比例黑客松",
];

function arayEvents(json) {
  const ignoreKey = ["createdAt", "createdBy", "updatedAt", "updatedBy"];
  const schemaName = "Event";
  let schema = json.data.__schema.types
    .filter((types) => types.kind === "OBJECT" && types.name === schemaName)[0]
    .fields.reduce(
      (pre, cv) =>
        (pre +=
          cv.type.kind === "NON_NULL" && !ignoreKey.includes(cv.name)
            ? `${pre ? "," : ""}"${cv.name}":""`
            : ""),
      ""
    );
  schema = JSON.parse("{" + schema + "}");
  console.log({ ...schema });
  return events.map((event) => {
    return {
      ...schema,
      id: crypto.randomUUID(),
      name: event,
      projectId: arayProjects[0].id,
      type: "實體活動",
      location: "",
      link: "",
    };
  });
}

fs.writeFile(
  "./data/scripts/aray-events.json",
  JSON.stringify(arayEvents(schema)),
  () => {}
);

console.log(arayEvents(schema));

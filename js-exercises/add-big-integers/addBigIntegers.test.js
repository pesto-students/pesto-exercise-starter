import { addBigIntegers } from "./addBigIntegers";

describe("addBigIntegers", () => {
  it("Adds a series of large integers", () => {
    expect(
      addBigIntegers(`539
8
201`)
    ).toEqual("748");
    expect(
      addBigIntegers(`123
      345
      9
      2`)
    ).toEqual("479");
    expect(
      addBigIntegers(`8284089949645109317773
5840714128396983596239
12946447842028638908267
79798868618779259038022`)
    ).toEqual("106870120538849990860301");
    expect(
      addBigIntegers(`8756499060735809031881837100717640
70934460872207922801951375249700
8977770975897338226131985886684681
91454061215320969515432196409002
651196844487299640943680194655725
6961749288159882186283784162262
9036094416288347680296039655938060
939687434873009984637644098803640
79366258890858900774075693801787
14118147069715140307096132393279
934555969025599810767196778088364
7551918592800103991210533406382642`)
    ).toEqual("37110557971443771181453756303286782");
    expect(
      addBigIntegers(`437720396187259475835238781865656019744046796313512520697126
984916770573810944707747942410200944569369114644474457801304`)
    ).toEqual("1422637166761070420542986724275856964313415910957986978498430");
  });
});

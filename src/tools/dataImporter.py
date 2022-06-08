import json
import re


def parseJank(source):
    res = []
    parsed = re.sub("\(*|ItemClass\=|Amount\=|\)*", "", source).replace("")
    splitParsed = parsed.split(",")
    for i in range(0, len(splitParsed), 2):
        res.append(
            {"name": splitParsed[i].replace('"', " "), "quantity": splitParsed[i + 1]}
        )
    return res


def importTool():
    # data = {
    # 'employees' : [
    #     {
    #         'name' : 'John Doe',
    #         'department' : 'Marketing',
    #         'place' : 'Remote'
    #     },
    #     {
    #         'name' : 'Jane Doe',
    #         'department' : 'Software Engineering',
    #         'place' : 'Remote'
    #     },
    #     {
    #         'name' : 'Don Joe',
    #         'department' : 'Software Engineering',
    #         'place' : 'Office'
    #     }
    #     ]
    # }
    # json_string = json.dumps(data)
    # print(json_string)
    # print("DICT FORMAT:")
    # python_dictionary = json.loads(json_string)
    # print(python_dictionary)
    # print(python_dictionary["employees"])
    # print("DONE")
    with open("Docs.json", "rb") as file:
        data = json.load(file)
        outputResult = {"recipe_data": []}
        for d in data:
            # items to produce
            if d["NativeClass"] == "Class'/Script/FactoryGame.FGRecipe'":
                for item in d["Classes"]:
                    if (
                        item["mProducedIn"]
                        != "(/Game/FactoryGame/Equipment/BuildGun/BP_BuildGun.BP_BuildGun_C)"
                    ):
                        print(item)
                        break


if __name__ == "__main__":
    importTool()

    # # resource extraction machine data
    # if (
    #     d["NativeClass"]
    #     == "Class'/Script/FactoryGame.FGBuildableResourceExtractor'"
    # ):
    #     processData("machineData.json")
    # # production machine data
    # if d["NativeClass"] == "Class'/Script/FactoryGame.FGBuildableManufacturer'":
    #     processData("machineData.json")

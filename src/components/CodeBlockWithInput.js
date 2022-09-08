import React, { useState } from "react";
import CodeBlock from "@theme/CodeBlock";
const TextToken = "TextToken";
const ArgumentToken = "ArgumentToken";
const TokenType = {
  TextToken,
  ArgumentToken,
};

let data = {
  name: "mysqldump",
  showTitle: false,
  hideInput: true,
  language: "bash",
  description: "Export MySQL database.",
  command: "mysqldump -u {{username}} -p {{database_name}} > {{dump_name}}",
  arguments: [
    { name: "username", title: "Username", default_value: "root" },
    {
      name: "database_name",
      title: "Database name",
      default_value: "yourdbname",
    },
    {
      name: "dump_name",
      title: "DB dump file name",
      default_value: "database_dump_name.sql",
    },
  ],
};

/**
 * Codeblock with inputs to generate Dynamic code snippet.
 * @param {data} commandData
 * @returns
 */
export function GeneratedCommand({ commandData }) {
  let commandArguments = commandData.arguments;
  const initialValues = commandArguments.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.name]: "",
    }),
    {}
  );
  const [values, setValues] = useState(initialValues);
  const [focusedArg, setFocusedArg] = useState(
    commandArguments.length > 0 ? commandArguments[0].name : null
  );
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const getArgText = (id) => {
    // If there's something in the input, return that.
    if (values[id] && values[id] != "") {
      return values[id];
    }
    // if there's not something typed, retrive the placeholder
    for (let argument of commandArguments) {
      if (argument.name === id) {
        return argument.default_value ?? argument.name;
      }
    }
  };
  const getTokenizedCommand = (command) => {
    if (command.length === 0) {
      return [];
    }
    let commandTokens = [];
    for (let argument of commandArguments) {
      // This regex ensures that the split happens only on the first occurence of the word
      let regex = new RegExp(`\\{{${argument.name}}}(.*)`, "s");
      const [beforeArg, afterArg] = command.split(regex);
      // If this arg is not a match - continue to the next arg
      if (beforeArg === command) {
        continue;
      }
      // If there was a match, recurse on the substrings, add the ArgToken, and return what's built
      commandTokens = commandTokens.concat(getTokenizedCommand(beforeArg));
      commandTokens.push({
        type: ArgumentToken,
        id: argument.name,
      });
      commandTokens = commandTokens.concat(getTokenizedCommand(afterArg));
      return commandTokens;
    }
    // If there were no matches, just add the current command as a TextToken and return
    commandTokens.push({ type: TextToken, text: command });
    return commandTokens;
  };
  return (
    <div>
      {commandData.hideInput || commandData.hideInput == undefined ? (
        <details>
          <summary>
            click here to generate command snippet with dynamic arguments
          </summary>
          <CommandInputs
            commandArguments={commandArguments}
            values={values}
            handleInputChange={handleInputChange}
          />
        </details>
      ) : (
        <CommandInputs
          commandArguments={commandArguments}
          values={values}
          handleInputChange={handleInputChange}
        />
      )}
      <div>
        <br />
        <CodeBlock
          title={commandData?.showTitle ? commandData?.name : ""}
          className={
            "language-" + commandData?.language
              ? "language-" + commandData?.language
              : "bash"
          }
        >
          {getTokenizedCommand(commandData.command).map((token, idx) => {
            switch (token.type) {
              case TokenType.ArgumentToken:
                return getArgText(token.id);
              case TokenType.TextToken:
                return token.text;
            }
          })}
        </CodeBlock>
      </div>
    </div>
  );
}

function CommandInputs({ commandArguments, values, handleInputChange }) {
  return (
    <>
      {commandArguments.map((argument) => (
        <div key={argument.name}>
          <label className="block text-sm font-medium">
            {argument.title ? argument.title : argument.name}{" "}
          </label>
          <input
            value={values[argument.name] ?? ""}
            onChange={handleInputChange}
            type="text"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-700"
            placeholder={argument.default_value ?? argument.name}
            name={argument.name}
            onFocus={() => setFocusedArg(argument.name)}
          />
        </div>
      ))}
    </>
  );
}

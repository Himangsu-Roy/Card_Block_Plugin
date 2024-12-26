import { FormTokenField } from "@wordpress/components";
import { withState } from "@wordpress/compose";

const MyOptionsTokenField = withState({
  tokens: [],

  suggestions: ["Africa", "America", "Antarctica", "Asia", "Europe", "Oceania"],
})(({ tokens, suggestions, setState }) => (
    
  <FormTokenField
    value={tokens}
    suggestions={suggestions}
    onChange={(tokens) => setState({ tokens })}
  />
));

export default MyOptionsTokenField;

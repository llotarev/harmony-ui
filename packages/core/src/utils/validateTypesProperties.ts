function validateTypesProperties(properties: object, validValueTypes: Array<string>): object {
  const entries = Object.entries(properties).filter(property => validValueTypes.includes(typeof property[1]))
  return Object.fromEntries(entries);
}

export default validateTypesProperties;

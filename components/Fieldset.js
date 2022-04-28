import PropTypes from 'prop-types';

function Fieldset({ options, label, id, register, selectedVal }) {
  const renderOptions = options.map((option) => {
    return (
      <option key={option.name} value={option.value}>
        {option.name}
      </option>
    );
  });
  return (
    <fieldset className="flex flex-col space-y-3">
      <label
        className="text-lg font-bold text-blueGrey-700 md:text-xl"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        defaultValue={selectedVal}
        className="cursor-pointer border border-blueGrey-600 bg-white p-3 font-semibold text-blueGrey-600"
        id={id}
        {...register(id)}
      >
        {renderOptions}
      </select>
    </fieldset>
  );
}

Fieldset.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  id: PropTypes.string,
  register: PropTypes.func,
};
export default Fieldset;

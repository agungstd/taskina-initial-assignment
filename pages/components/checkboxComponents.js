import PropTypes from "prop-types";

export default function CheckboxComponents({
  id,
  index,
  title,
  onChange,
  isDisabled,
  value,
}) {
  return (
    <div className="flex justify-between items-center p-2 my-2">
      <label
        htmlFor={`page-${index}`}
        className="text-gray-900 font-light text-sm"
      >
        {title}
      </label>
      <input
        type="checkbox"
        id={id}
        className="form-checkbox h-5 w-5 text-yellow-400 outline-slate-500 rounded-lg"
        disabled={isDisabled}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

CheckboxComponents.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  value: PropTypes.bool.isRequired,
};

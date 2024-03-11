import PropTypes from "prop-types";

import TextInputWithLabel from "../../components/TextInputWithLabel";
import SButton from "../../components/CButton";

export default function Sform({
  isLoading,
  handleSubmit,
  valueEmail,
  valuePassword,
  onChange,
}) {
  return (
    <form onSubmit={handleSubmit} className="text-center">
      <TextInputWithLabel
        htmlFor="email-address"
        label="Email address"
        name="email"
        type="email"
        value={valueEmail}
        className="text-input mb-6"
        placeholder="Email address"
        onChange={onChange}
      />
      <TextInputWithLabel
        htmlFor="password"
        label="Password"
        name="password"
        type="password"
        value={valuePassword}
        className="text-input mb-6"
        placeholder="Password"
        onChange={onChange}
      />
      <SButton
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 px-5 py-2 text-center text-white rounded-lg"
        loading={isLoading}
        disabled={isLoading}
      >
        Sign In
      </SButton>
    </form>
  );
}

Sform.propTypes = {
  isLoading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  valueEmail: PropTypes.string,
  valuePassword: PropTypes.string,
  onChange: PropTypes.func,
};

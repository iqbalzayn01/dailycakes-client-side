import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function CButton({
  children,
  action,
  loading,
  disabled,
  className,
  type,
}) {
  return (
    <motion.button
      type={type}
      className={className}
      onClick={action}
      disabled={disabled}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {loading ? "Loading..." : children}
    </motion.button>
  );
}

CButton.propTypes = {
  children: PropTypes.string,
  action: PropTypes.func,
  type: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

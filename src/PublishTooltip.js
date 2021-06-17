import { Tooltip } from "react-bootstrap";

export function PublishTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
    Published after launch
  </Tooltip>
  )
}
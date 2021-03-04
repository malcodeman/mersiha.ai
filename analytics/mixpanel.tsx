import mixpanel from "mixpanel-browser";

import { MIXPANEL_TOKEN } from "../lib/constants";

mixpanel.init(MIXPANEL_TOKEN);

export default mixpanel;

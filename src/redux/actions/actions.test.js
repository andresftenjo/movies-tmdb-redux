import * as apiActions from "./apiStatusActions";
import * as upcomingActions from "./upcomingActions";
import * as detailMovieActions from "./detailMovieActions";
import * as types from "./actionTypes";

describe("begin api tests", () => {
    it("should beginApiCall with expected Action", () => {
        const expectedAction = { type : types.BEGIN_API_CALL }
        const action = apiActions.beginApiCall(); 

        expect(action).toEqual(expectedAction);
    });
});

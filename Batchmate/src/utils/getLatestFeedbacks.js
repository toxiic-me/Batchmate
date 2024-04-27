export const getLatestFeedbacks = async (setLatestFeedbacks) => {
    let res = await fetch(`${process.env.REACT_APP_BASE_URL}/get-latest-feedbacks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });
    let result = await res.json();
    setLatestFeedbacks(result)
}
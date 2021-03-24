export default interface Page {
    /**
     * unique name for the page
     */
    name: string;

    /**
     * display prompt for this page
     * handle reponse
     * navigate to next page
     */
    render: Function;

}
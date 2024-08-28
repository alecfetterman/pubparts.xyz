type itemData = {
    /**
     * Item title text
     */
    title: string
    /**
     * Item price text
     */ 
    fabricationMethod:
        | "3DP"
        | "CNC"
        | "Laser"
        | "Other"
    /**
     * Item type text
     */ 
    typeOfPart: PartType[]
    /**
     * Image source url
     */
    imageSrc: string
    /**
     * Item external URL
     */
    externalUrl?: string
    /**
     * Item ZIP direct download URL
     */
    dropboxUrl?: string
    /**
     * Item ZIP direct download last updated
     */
    dropboxZipLastUpdated?: string
    /**
     * Item price text
     */ 
    price?: string
}

type PartType =
    | "Axle Block"
    | "Battery Box"
    | "Bearing Cover"
    | "Bumper"
    | "Connector Cover"
    | "Controller Box"
    | "Fender"
    | "Footpad"
    | "Gasket"
    | "Miscellaneous"
    | "Motor"
    | "Motor Cover"
    | "Port Cover"
    | "Rail Attachment"
    | "Rails"
    | "Rim Saver"
    | "Stand"
    | "Tool"
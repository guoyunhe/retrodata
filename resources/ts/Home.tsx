import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";

import Banner from "./images/Banner";
import Page from "./Page";
import { queryUniversityList } from "./universities/services/queryUniversityList";
import { University } from "./universities/types/University";
import { UniversitiesList } from "./universities/UniversitiesList";
import { UniversityCreateDialog } from "./universities/UniversityCreateDialog";

export default function Home() {
    const [open, setOpen] = useState(false);
    const [universities, setUniversities] = useState<University[]>([]);

    useEffect(() => {
        queryUniversityList().then((res) => {
            setUniversities(res.data);
        });
    }, []);

    return (
        <Page>
            <Banner
                src="https://source.unsplash.com/RnCPiXixooY/1920x480"
                width="1920"
                height="480"
            />
            <h1>More conntent is comming soon...</h1>

            <Button onClick={() => setOpen(true)}>Create University</Button>
            <UniversityCreateDialog
                open={open}
                onClose={() => setOpen(false)}
            />
            <UniversitiesList universities={universities} />
        </Page>
    );
}

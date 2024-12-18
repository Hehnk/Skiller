"use client";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon
} from "@heroicons/react/24/solid";

import Link from 'next/link';
import React from "react";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography
} from "./material";

// TODO: For some reason, this is needed in HTML (placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }})
export function MultiLevelSidebar() {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value: React.SetStateAction<number>) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
                    Skiller
                </Typography>
            </div>
            <List placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                <Link href={`/dashboard`}>
                    <ListItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>


                        <ListItemPrefix placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>
                </Link>
                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    }
                    placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}
                >
                    <ListItem className="p-0" selected={open === 2} placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                            <ListItemPrefix placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                                <ShoppingBagIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                                Steuern
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                            <Link href={`/taxes/statements`}>
                                <ListItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                                    <ListItemPrefix placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Steuerbescheide
                                </ListItem>
                            </Link>
                        </List>
                    </AccordionBody>
                </Accordion>
            </List>
        </Card >
    );
}
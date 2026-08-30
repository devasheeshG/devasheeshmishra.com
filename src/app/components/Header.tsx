import { MailIcon, PhoneIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";

interface LocationLinkProps {
    location: typeof RESUME_DATA.location;
}

function LocationLink({ location }: LocationLinkProps) {
    return (
        <p className="max-w-md items-center text-pretty font-mono text-xs text-foreground">
            {location}
        </p>
    );
}

interface SocialButtonProps {
    href: string;
    // icon: React.SVGProps<SVGSVGElement>;
    icon: React.ElementType;
    label: string;
}

function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
    return (
        <Button className="size-8" variant="outline" size="icon" asChild={true}>
            <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon className="size-4" aria-hidden="true" />
            </a>
        </Button>
    );
}

interface ContactButtonsProps {
    contact: typeof RESUME_DATA.contact;
}

function ContactButtons({ contact }: ContactButtonsProps) {
    return (
        <ul
            className="flex list-none gap-x-1 pt-1 font-mono text-sm text-foreground/80 print:hidden"
            aria-label="Contact links"
        >
            {contact.email && (
                <li key="email">
                    <SocialButton
                        href={`mailto:${contact.email}`}
                        icon={MailIcon}
                        label="Email"
                    />
                </li>
            )}
            {contact.tel && (
                <li key="phone">
                    <SocialButton
                        href={`tel:${contact.tel}`}
                        icon={PhoneIcon}
                        label="Phone (US)"
                    />
                </li>
            )}
            {contact.tel2 && (
                <li key="phone2">
                    <SocialButton
                        href={`tel:${contact.tel2}`}
                        icon={PhoneIcon}
                        label="Phone (India)"
                    />
                </li>
            )}
            {contact.social.map((social) => (
                <li key={social.name}>
                    <SocialButton
                        href={social.url}
                        icon={social.icon}
                        label={social.name}
                    />
                </li>
            ))}
        </ul>
    );
}

/**
 * Header component displaying personal information and contact details
 */
export function Header() {
    return (
        <header className="flex items-start justify-between gap-4 sm:gap-8">
            <div className="min-w-0 flex-1 space-y-1.5">
                <h1 className="text-2xl font-bold" id="resume-name">
                    {RESUME_DATA.name}
                </h1>
                <p className="max-w-md text-pretty font-mono text-sm text-foreground/80 print:text-[12px]">
                    {RESUME_DATA.about}
                </p>

                <LocationLink location={RESUME_DATA.location} />

                <ContactButtons contact={RESUME_DATA.contact} />
            </div>

            <Avatar className="mt-1 size-32 shrink-0" aria-hidden="true">
                <AvatarImage
                    alt={`${RESUME_DATA.name}'s profile picture`}
                    src={RESUME_DATA.avatarUrl}
                />
                <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
        </header>
    );
}

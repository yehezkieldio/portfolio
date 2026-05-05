const MEDIUM_PROFILE_URL = "https://medium.com/@yehezkiel";

export function MediumLink() {
    return (
        <a className="underline hover:text-muted-foreground" href={MEDIUM_PROFILE_URL}>
            Medium
        </a>
    );
}

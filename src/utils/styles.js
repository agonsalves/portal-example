import {
    absolute,
    auto,
    block,
    center,
    column,
    fixed,
    flex,
    hidden,
    inlineBlock,
    none,
    relative,
    spaceBetween,
    white
} from './themer'

export const colors = {
    gold: '#E69225',
    gray: '#3E3E40',
    lightGray: '#E5E5E5',
    mediumGray: '#BBBBBF',
    red: '#F34300',
    green: '#7BC20A',
    main: 'black'
}

const styles = {
    border: '1px solid #E5E5E5',
    mobileContentWidth: '90%'
}

export const pageFrame = {
    display: flex,
    justifyContent: center,
    alignItems: center,
    flexDirection: column,
    width: '100%'
}

export const headerWrapper = {
    backgroundColor: 'black',
    color: 'white',
    size: [50, .7, 40],
    lineHeight: [60, .7, 50],
    letterSpacing: -2.5,
    weight: 800,
    width: '100%',
    paddingTop: 35,
    paddingBottom: 50,
    display: flex,
    justifyContent: center
}

export const detailHeaderWrapper = {
    ...headerWrapper,
    mobile: {
        paddingBottom: 15,
        paddingTop: 10
    }
}

export const landingPageHeader = {
    ...headerWrapper,
    paddingTop: 0,
    paddingBottom: 0,
    height: 200,
}

export const headerInner = {
    width: [1200, .6, styles.mobileContentWidth]
}

export const landingPageHeaderInner = {
    ...headerInner,
    display: flex,
    justifyContent: spaceBetween,
    alignItems: center,
    mobile: {
        justifyContent: center
    }
}

export const landingPageVisitLink = {
    color: '#f5f5f5',
    size: 19,
    lineHeight: 30,
    weight: 600,
    letterSpacing: -.2,
    mobile: {
        display: none
    }
}

export const landingPageVisitLinkText = {
    color: '#f5f5f5',
    textDecoration: none
}

export const landingPageWrapper = {
    display: flex,
    flexDirection: column,
    alignItems: center
}

export const mainWrapper = {
    mobile: {
        width: styles.mobileContentWidth
    }
}

export const landingPageTitle = {
    size: 50,
    weight: 800,
    lineHeight: 60,
    letterSpacing: -2.5,
    color: colors.main,
    marginTop: 200,
    marginBottom: 35
}

export const landingPageText = {
    display: flex,
    justifyContent: center,
    alignItems: center,
    textAlign: center,
    size: 19,
    lineHeight: 30,
    color: colors.main,
    width: 400
}

export const authWrapper = {
    display: flex,
    justifyContent: center,
    alignItems: center,
    flexDirection: column,
    marginTop: [200, .7, 50]
}

export const authMessage = {
    marginBottom: 35,
    size: 19,
    color: colors.main,
}

export const sectionWrapper = {
    display: flex,
    borderBottom: styles.border,
    paddingBottom: 25,
    marginBottom: 25,
    position: relative,
    width: [1200, .6, '100%'],
    marginTop: 60,
    size: 19,
    lineHeight: 30,
    letterSpacing: -.2,
    color: colors.main,
    flexShrink: 0,
    child: {
        selector: 'a',
        color: colors.main,
        textDecoration: 'underline'
    },
    mobile: {
        flexDirection: column
    }
}

export const sectionTitle = {
    weight: 800,
    size: [50, .7, 35],
    lineHeight: 60,
    letterSpacing: -2,
    width: [490, .7, '100%'],
    marginRight: 50,
    flexShrink: 0,
    mobile: {
        marginBottom: 50
    }
}

export const sectionIconWrapper = {
    display: inlineBlock,
    width: 95
}

export const sectionIcon = {
    display: inlineBlock,
    height: 60,
    width: 'auto',
    transform: 'translateY(13px)'
}

export const contactIconStyle = {
    ...sectionIcon,
    height: 45,
    marginBottom: 10,
    marginTop: -7
}

export const sectionRightWrapper = {
    width: '100%',
    paddingTop: [33, .7, 0]
}

export const subsectionWrapper = {
    marginBottom: 50
}

export const sectionSubhead = {
    weight: 800,
    size: 26,
    lineHeight: 36,
    letterSpacing: -.3,
    marginBottom: 10
}

export const galleryBackButton = {
    borderRadius: '50px',
    border: '2px solid #e5e5e5',
    size: 12,
    width: '30px !important',
    height: '30px !important',
    padding: '18px',
    display: block
}

export const galleryTitle = {
    ...sectionTitle,
    width: [400, .7, '100%'],
    marginRight: [140, .7, '0']
}

export const gallerySubhead = {
    weight: 700,
    size: 19,
    lineHeight: 29,
    marginBottom: 10,
    color: 'black'
}

export const hangingItem = {
    position: absolute,
    top: 0,
    left: -100,
    mobile: {
        position: relative,
        left: 0
    }
}

export const galleryDescription = {
    size: 19,
    lineHeight: 30,
    color: '#949499',
    letterSpacing: -.2,
    weight: 400,
    marginTop: 30,
    borderTop: styles.border,
    paddingTop: 30,
    display: flex
}

export const inlineIcon = {
    width: '25px !important',
    marginRight: 10,
    display: inlineBlock,
    color: colors.red
}

export const siteDescription = {
    marginBottom: 10
}


export const timelineDescription = {
    size: 19,
    lineHeight: 30,
    color: colors.main,
    letterSpacing: -.2,
    weight: 400,
    marginBottom: 70
}

export const timelineIndex = {
    ...hangingItem,
    fontFamily: '"SF UI Text", sans-serif',
    size: 70,
    lineHeight: 70,
    color: colors.lightGray,
    letterSpacing: -.8,
    weight: 800,
    left: -115
}

export const timelineDuration = {
    color: colors.mediumGray,
    size: 17,
    lineHeight: 24,
    letterSpacing: -.2,
    weight: 500,
    fontFamily: '"SF UI Text", sans-serif',
}

export const timelineSubsection = {
    ...subsectionWrapper,
    position: relative,
    borderBottom: styles.border,
    paddingBottom: 50,
    lastChild: {
        border: none,
        paddingBottom: 0
    }
}

export const flagStyleSwitch = flag => {
    const baseStyle = {
        display: inlineBlock,
        borderRadius: 30,
        size: 12,
        paddingLeft: 12,
        paddingRight: 12,
        lineHeight: 24,
        marginLeft: 15,
        color: white,
        weight: 600
    }

    switch (flag.toLowerCase()) {
        case 'new':
            return {
                ...baseStyle,
                backgroundColor: colors.red
            }
        case 'updated':
            return {
                ...baseStyle,
                backgroundColor: colors.green
            }
        case 'favorite':
        default:
            return {
                ...baseStyle,
                backgroundColor: colors.gold
            }
    }
}

export const itemNavWrapper = {
    position: fixed,
    top: 0,
    left: 0,
    paddingBottom: 60,
    width: '100%',
    zIndex: 2,
    height: 145,
    transform: 'translateY(-146px)',
    transition: 'transform .3s ease-out',
    hover: {
        transform: 'translateY(0px)'
    },
    mobile: {
        transform: none,
        position: relative,
        paddingBottom: 0,
        overflow: hidden,
        height: auto
    }
}

export const itemNavButton = {
    backgroundColor: colors.gold,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 25,
    size: 16,
    lineHeight: 32,
    textDecoration: none,
    color: white,
    border: '2px solid white',
    display: inlineBlock,
    marginRight: 20,
    letterSpacing: 0,
    mobile: {
        marginBottom: 10
    }
}

export const itemNavLabel = {
    size: 22,
    weight: 600,
    lineHeight: 36,
    letterSpacing: -.63,
    display: inlineBlock
}

export const itemDetailFile = {
    marginTop: [90, .7, 30],
    display: flex,
    flexDirection: column,
    alignItems: center,
    width: '100%',
    size: 26,
    lineHeight: 36,
    weight: 700,
    letterSpacing: -.75,
    mobile: {
        width: styles.mobileContentWidth,
        alignSelf: center
    }
}

export const itemDetailTitle = {
    marginBottom: 15,
    textAlign: center
}

export const clickToView = {
    color: '#3E3E40',
    size: 19,
    lineHeight: 30,
    textDecoration: 'underline',
    weight: 400,
    display: block,
    textAlign: center,
    marginTop: 15,
}

export const goToNextItem = {
    display: 'none',
    size: 16,
    lineHeight: 30,
    color: '#949499',
    weight: 600,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 35,
    border: '2px solid #E5E5E5',
    borderRadius: 25,
    mobile: {
        display: 'block',
        cursor: 'pointer'
    },
    icon: {
        marginLeft: 15
    }
}

export const bulletListStyle = {
    listStylePosition: 'inside',
    paddingLeft: 0,
    marginBottom: 0,
    lineHeight: 2
}
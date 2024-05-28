import React from 'react'
// import PDF from '../../assets/img/images.png'



export const formatDate = (date) => {
    date = parseInt(date)
    if (!date) {
        return '---'
    }
    let formattedDate = new Date(date).toString()
    let formattedDateSplit = formattedDate.split(" ")
    return `${formattedDateSplit[0]} ${formattedDateSplit[1]} ${formattedDateSplit[2]}, ${formattedDateSplit[3]}`
}

export const formatDate1 = (date) => {
    date = parseInt(date)
    if (date === 0) {
        return ''
    }
    let formattedDate = new Date(date).toString()
    let formattedDateSplit = formattedDate.split(" ")
    return `${formattedDateSplit[1]} ${formattedDateSplit[2]}, ${formattedDateSplit[3]}`
}

export const formatTimeFromDB = (time) => {
    let timeWithSecondsChosen
    if (!time) {
        timeWithSecondsChosen = "--:--"
    } else {
        let parsedTime = parseInt(time)
        let timeObject = new Date(parsedTime).toISOString().split("T")
        let timeWithSeconds = timeObject[1].split(".")
        timeWithSecondsChosen = timeWithSeconds[0]
    }
    return timeWithSecondsChosen
}

export const validateEmptyToSpace = (value) => {
    if (!value || value.length === 0) {
        return ''
    } else {
        return value
    }
}

export const validateEmptyToDash = (value) => {
    if (!value || value.length === 0) {
        return '---'
    } else {
        return value
    }
}

export const validateEmptyToZero = (value) => {
    if (!value || value.length === 0) {
        return 0
    } else {
        return value
    }
}

export const validateEmptyToNull = (value) => {
    if (!value || value.length === 0) {
        return null
    } else {
        return value
    }
}

export const ImgorPdf = (value) => {

    if (!value) return 'No files selected.'

    const extention = value.split(/[#?]/)[0].split('.').pop().trim()

    if (extention === 'pdf') {
        return <img src={PDF} width={100} onClick={() => window.open(value)} style={{ cursor: 'pointer' }} />
    } else if (extention === 'jpg' || extention === 'jpeg' || extention === 'png') {
        return <img src={value} width={100} onClick={() => window.open(value)} style={{ cursor: 'pointer' }} />
    } else {
        return value
    }
}

export const GraphQLErrorHandler = (data) => {
    console.log(data)
    if (data?.error?.clientErrors && data?.error?.clientErrors?.length !== 0) {
        console.log('Client Error')
        console.log(data?.error?.clientErrors)
    }
    if (data?.error?.graphQLErrors && data?.error?.graphQLErrors?.length !== 0) {
        console.log('GraphQL Error')
        console.log(data?.error?.graphQLErrors?.map(err => err.message))
    }
    if (data?.error?.networkError && data?.error?.networkError?.length !== 0) {
        console.log('Network Error')
        console.log(data?.error?.networkError?.result?.errors.map(err => err.message))
    }
}